import React, { useState } from "react";
import { Pencil, Trash2, ImagePlus } from "lucide-react";

export default function Community() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [editId, setEditId] = useState(null);

  const handlePost = () => {
    if (!text.trim()) return alert("Text field cannot be empty!");
    if (editId) {
      setPosts(
        posts.map((p) =>
          p.id === editId ? { ...p, text, image } : p
        )
      );
      setEditId(null);
    } else {
      const newPost = {
        id: Date.now(),
        text,
        image,
        date: new Date().toLocaleString(),
      };
      setPosts([newPost, ...posts]);
    }
    setText("");
    setImage(null);
  };

  const handleEdit = (id) => {
    const post = posts.find((p) => p.id === id);
    setText(post.text);
    setImage(post.image);
    setEditId(id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-20">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-10 mt-20">
          <span className="text-[#155dfc]">Community </span>Feed
        </h1>

        {/* Create Post */}
        <div className="bg-gray-900 rounded-2xl p-5 shadow-lg border border-gray-800">
          <textarea
            placeholder="What's on your mind?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-gray-800 rounded-xl p-3 text-white resize-none focus:outline-none"
            rows={4}
          />
          {image && (
            <div className="relative mt-3">
              <img
                src={image}
                alt="preview"
                className="rounded-xl max-h-60 object-cover w-full"
              />
              <button
                onClick={() => setImage(null)}
                className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded-md text-xs text-white"
              >
                Remove
              </button>
            </div>
          )}

          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-white">
              <ImagePlus size={20} />
              <span>Add Image</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
            <button
              onClick={handlePost}
              className="bg-blue-600 hover:bg-blue-700 cursor-pointer px-4 py-2 rounded-lg font-medium"
            >
              {editId ? "Update Post" : "Post"}
            </button>
          </div>
        </div>

        {/* Feed */}
        <div className="space-y-6">
          {posts.length === 0 ? (
            <p className="text-gray-400 text-center mt-10">
              No posts yet. Be the first to share something!
            </p>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-5 shadow-lg"
              >
                <div className="flex justify-between items-start">
                  <p className="text-gray-300 whitespace-pre-line">
                    {post.text}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(post.id)}
                      className="text-blue-400 hover:text-blue-600"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="text-red-400 hover:text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                {post.image && (
                  <img
                    src={post.image}
                    alt="Post"
                    className="rounded-xl mt-4 max-h-72 object-cover w-full"
                  />
                )}

                <p className="text-gray-500 text-sm mt-2">
                  Posted on {post.date}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
