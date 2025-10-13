import React from "react";

const Profile = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-white">Profile</h1>

      {/* User Info */}
      <div className="card flex items-center space-x-5">
        <img
          src="https://ui-avatars.com/api/?name=User&background=16a34a&color=fff&bold=true"
          alt="User Avatar"
          className="w-20 h-20 rounded-full border-2 border-green-500"
        />
        <div>
          <h2 className="text-xl font-bold text-white">John Doe</h2>
          <p className="text-gray-400">john.doe@example.com</p>
          <p className="text-gray-400">Member since: Jan 2024</p>
        </div>
      </div>

      {/* Account Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="card glow-card">
          <h2 className="text-sm text-gray-400">Total Portfolio Value</h2>
          <p className="text-2xl font-semibold text-green-400">$2,28,000.47</p>
        </div>
        <div className="card glow-card">
          <h2 className="text-sm text-gray-400">Cash Balance</h2>
          <p className="text-2xl font-semibold text-gray-100">$8,540.00</p>
        </div>
        <div className="card glow-card">
          <h2 className="text-sm text-gray-400">Total Returns</h2>
          <p className="text-2xl font-semibold text-green-400">+5.8%</p>
        </div>
      </div>

      {/* Settings Section */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4 text-white">Account Settings</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-1">Display Name</label>
            <input
              type="text"
              className="w-full bg-[#1f2228] border border-gray-700 rounded-lg p-2 text-gray-100 focus:ring-2 focus:ring-green-500 outline-none"
              defaultValue="John Doe"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              className="w-full bg-[#1f2228] border border-gray-700 rounded-lg p-2 text-gray-100 focus:ring-2 focus:ring-green-500 outline-none"
              defaultValue="john.doe@example.com"
            />
          </div>

          <button className="btn-primary mt-3">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
