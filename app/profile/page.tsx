"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import DashboardHeader from "../components/DashboardHeader";

export default function Profile() {
  const [profile, setProfile] = useState<any | null>(null);
  const [authUser, setAuthUser] = useState<any | null>(null);

  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  // EDIT MODE
  const [editing, setEditing] = useState(false);

  // editable fields
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");

  // FETCH PROFILE
  useEffect(() => {
    const fetchProfile = async () => {
      const { data: authData } = await supabase.auth.getUser();

      if (!authData?.user) {
        setLoading(false);
        return;
      }

      const user = authData.user;

      setAuthUser(user);

      // DEFAULT DISPLAY NAME
      const defaultDisplayName =
        user.user_metadata?.full_name ||
        user.user_metadata?.name ||
        user.email?.split("@")[0] ||
        "User";

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (!error && data) {

        // AUTO SAVE DISPLAY NAME IF EMPTY
        if (!data.full_name) {
          await supabase
            .from("profiles")
            .update({
              full_name: defaultDisplayName,
            })
            .eq("id", user.id);

          data.full_name = defaultDisplayName;
        }

        setProfile(data);

        setUsername(
          data.username ||
          user.email?.split("@")[0] ||
          ""
        );

        setFullName(
          data.full_name ||
          defaultDisplayName
        );
      }

      setLoading(false);
    };

    fetchProfile();
  }, []);

  // SAVE PROFILE
  const handleSave = async () => {
    if (!profile) return;

    setSaving(true);

    const { error } = await supabase
      .from("profiles")
      .update({
        username,
        full_name: fullName,
      })
      .eq("id", profile.id);

    if (!error) {
      setProfile((prev: any) => ({
        ...prev,
        username,
        full_name: fullName,
      }));

      setEditing(false);
    }

    setSaving(false);
  };

  // UPLOAD AVATAR
  const uploadAvatar = async (file: File) => {
    if (!profile) return;

    try {
      setUploading(true);

      const fileExt = file.name.split(".").pop();

      const filePath = `${profile.id}/avatar-${Date.now()}.${fileExt}`;

      // UPLOAD
      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, {
          upsert: true,
        });

      if (uploadError) {
        console.error(uploadError);
        return;
      }

      // GET PUBLIC URL
      const { data } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);

      const publicUrl = data.publicUrl;

      // UPDATE DB
      const { error: updateError } = await supabase
        .from("profiles")
        .update({
          avatar_url: publicUrl,
        })
        .eq("id", profile.id);

      if (updateError) {
        console.error(updateError);
        return;
      }

      // UPDATE UI
      setProfile((prev: any) => ({
        ...prev,
        avatar_url: `${publicUrl}?t=${Date.now()}`,
      }));

    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  // FILE CHANGE
  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    await uploadAvatar(file);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-stone-600">
        Loading profile...
      </div>
    );
  }

  return (
    <>
      <DashboardHeader />

      <div className="min-h-screen bg-[#f8f8f5] flex items-center justify-center px-6 pt-28">

        <div className="w-[520px] bg-white rounded-[40px] shadow-lg p-10 flex flex-col items-center gap-6">

          {/* AVATAR */}
          <label className="cursor-pointer relative group">

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />

            {profile?.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt="Profile Avatar"
                className="w-40 h-40 rounded-full object-cover border-4 border-lime-100"
              />
            ) : (
              <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm">
                Upload Photo
              </div>
            )}

            {/* HOVER */}
            <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">

              <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-sm flex flex-col items-center gap-1">
                <span className="text-2xl">📷</span>
                <span>Change Photo</span>
              </div>

            </div>

            {/* UPLOADING */}
            {uploading && (
              <div className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center text-white text-sm">
                Uploading...
              </div>
            )}

          </label>

          {/* PROFILE INFO */}
          {!editing ? (
            <div className="flex flex-col items-center gap-2">

              {/* DISPLAY NAME */}
              <h1 className="text-3xl font-bold text-black">
                {profile?.full_name || "No Name"}
              </h1>

              {/* USERNAME */}
              <p className="text-black/50 text-lg">
                @{profile?.username || "username"}
              </p>

              
            </div>
          ) : (
            <div className="w-full space-y-4">

              {/* DISPLAY NAME */}
              <div className="space-y-1">
                <p className="text-sm text-black/50 font-medium">
                  Display Name
                </p>

                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter display name"
                  className="w-full text-black/50 px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-[#609966]"
                />
              </div>

              {/* USERNAME */}
              <div className="space-y-1">
                <p className="text-sm text-black/50 font-medium">
                  Username
                </p>

                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full text-black/50 px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-[#609966]"
                />
              </div>

            </div>
          )}

          {/* BUTTONS */}
          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              className="mt-2 px-8 py-3 bg-lime-100 rounded-full text-stone-700 font-semibold hover:bg-lime-200 transition"
            >
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-3">

              <button
                onClick={handleSave}
                disabled={saving}
                className="px-8 py-3 bg-lime-100 rounded-full text-stone-700 font-semibold hover:bg-lime-200 transition disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>

              <button
                onClick={() => setEditing(false)}
                className="px-8 py-3 bg-gray-200 rounded-full text-stone-700 font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>

            </div>
          )}

        </div>

      </div>
    </>
  );
}