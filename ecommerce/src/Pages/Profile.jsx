
import React, { useState } from 'react';
import { User, Mail, Lock, LogOut, Camera, ArrowRight } from 'lucide-react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    // Mock login — derive name from email prefix
    const mockName = formData.email.split('@')[0];
    setUser({
      name: mockName.charAt(0).toUpperCase() + mockName.slice(1),
      email: formData.email,
      avatar: `https://ui-avatars.com/api/?name=${mockName}&background=78350f&color=fff&size=128`
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    // Mock sign-up
    setUser({
      name: formData.name,
      email: formData.email,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=78350f&color=fff&size=128`
    });
  };

  const handleLogout = () => {
    setUser(null);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setIsSignUp(false);
    setError('');
  };

  /* ─────────────── Logged-in Profile View ─────────────── */
  if (user) {
    return (
      <section className="min-h-screen bg-stone-100 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-amber-100 overflow-hidden">
          {/* Header Banner */}
          <div className="h-24 bg-amber-800" />

          <div className="px-8 pb-8 -mt-12">
            {/* Avatar */}
            <div className="relative mx-auto w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-amber-100">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-amber-800 text-white p-1 rounded-full border-2 border-white">
                <Camera className="w-3 h-3" strokeWidth={2} />
              </div>
            </div>

            {/* User Info */}
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold text-amber-950">{user.name}</h2>
              <p className="text-amber-700/80 text-sm mt-1">{user.email}</p>
            </div>

            {/* Details Card */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-amber-50/60 border border-amber-100">
                <div className="p-2.5 bg-amber-100 rounded-lg text-amber-800">
                  <User className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-medium text-amber-600 uppercase tracking-wide">Full Name</p>
                  <p className="text-amber-950 font-medium">{user.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-amber-50/60 border border-amber-100">
                <div className="p-2.5 bg-amber-100 rounded-lg text-amber-800">
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-medium text-amber-600 uppercase tracking-wide">Email Address</p>
                  <p className="text-amber-950 font-medium">{user.email}</p>
                </div>
              </div>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="mt-8 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-amber-800 text-amber-800 font-semibold hover:bg-amber-800 hover:text-white transition-colors duration-200"
            >
              <LogOut className="w-4 h-4" strokeWidth={1.5} />
              Logout
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* ─────────────── Login / Sign-up Forms ─────────────── */
  return (
    <section className="min-h-screen bg-stone-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-amber-100 p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-950">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="text-amber-700/70 mt-2 text-sm">
            {isSignUp
              ? 'Sign up to get started with your shopping journey'
              : 'Sign in to access your profile and wishlist'}
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={isSignUp ? handleSignUp : handleLogin}
          className="space-y-5"
        >
          {/* Name — Sign Up only */}
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-amber-900 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" strokeWidth={1.5} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50/30 text-amber-950 placeholder:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all"
                />
              </div>
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-amber-900 mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" strokeWidth={1.5} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50/30 text-amber-950 placeholder:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-amber-900 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" strokeWidth={1.5} />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50/30 text-amber-950 placeholder:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all"
              />
            </div>
          </div>

          {/* Confirm Password — Sign Up only */}
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-amber-900 mb-1.5">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" strokeWidth={1.5} />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50/30 text-amber-950 placeholder:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all"
                />
              </div>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-800 text-white font-semibold hover:bg-amber-900 active:scale-[0.98] transition-all duration-200 shadow-md shadow-amber-900/20"
          >
            {isSignUp ? 'Create Account' : 'Sign In'}
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </form>

        {/* Toggle */}
        <p className="mt-6 text-center text-sm text-amber-700/80">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError('');
            }}
            className="font-semibold text-amber-800 hover:text-amber-950 underline underline-offset-2 transition-colors"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Profile;