import React, { useState, useEffect } from 'react';
import { Star, ChevronRight, Check, Menu, X, ArrowRight, Dumbbell, Users, TrendingUp, Shield, Zap, Clock, Phone, Mail, MapPin, Instagram, Twitter } from 'lucide-react';

const APP_URL = 'https://app.coachme.life';
const API_URL = 'https://coach-api-1770519048.azurewebsites.net/api/v1';

// === COACH PROFILES (will come from API) ===
const featuredCoaches = [
  { name: 'Murali Gorti', specialization: 'Strength & Conditioning', bio: 'Certified personal trainer with 10+ years transforming lives through structured fitness programs.', rating: 4.9, reviews: 127, location: 'Hyderabad', image: null },
  { name: 'Priya Sharma', specialization: 'Yoga & Mobility', bio: 'RYT-500 certified yoga instructor specializing in therapeutic yoga and injury recovery.', rating: 4.8, reviews: 89, location: 'Mumbai', image: null },
  { name: 'Arjun Reddy', specialization: 'HIIT & CrossFit', bio: 'CrossFit L2 trainer helping busy professionals get fit in 45 minutes or less.', rating: 4.7, reviews: 203, location: 'Bangalore', image: null },
];

const testimonials = [
  { name: 'Srinivas K.', text: 'Lost 15kg in 4 months with my CoachMe trainer. The structured sessions and accountability made all the difference.', rating: 5, role: 'Software Engineer' },
  { name: 'Ananya M.', text: 'My coach tracks everything — workouts, progress photos, measurements. I can see exactly how far I have come.', rating: 5, role: 'Marketing Manager' },
  { name: 'Rahul P.', text: 'The WhatsApp reminders and payment links make it so easy. No more awkward conversations about money.', rating: 5, role: 'Entrepreneur' },
  { name: 'Deepika R.', text: 'As a coach, this platform cut my admin work in half. I can focus on what I love — training clients.', rating: 5, role: 'Fitness Coach' },
];

const plans = [
  { name: 'Starter', price: 0, period: 'Free forever', features: ['Up to 10 clients', 'Session scheduling', 'Basic workout library', 'WhatsApp reminders', 'Payment links'], cta: 'Start Free', popular: false },
  { name: 'Pro', price: 1499, period: '/month', features: ['Unlimited clients', 'Bulk import & planning', 'Custom workout plans', 'Progress photo tracking', 'Priority support', 'Client portal'], cta: 'Start 14-day trial', popular: true },
  { name: 'Business', price: 3999, period: '/month', features: ['Everything in Pro', 'Multi-coach support', 'Custom branding', 'API access', 'Dedicated account manager', 'Advanced analytics'], cta: 'Contact Sales', popular: false },
];

// === COMPONENTS ===
const Nav = ({ onRegister }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 50); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h); }, []);
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center"><Dumbbell size={22} className="text-white" /></div>
          <span className="text-xl font-black tracking-tight" style={{fontFamily:'Satoshi,system-ui'}}>CoachMe</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#coaches" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Coaches</a>
          <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Features</a>
          <a href="#pricing" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#testimonials" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Reviews</a>
          <a href={APP_URL} className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">Login</a>
          <button onClick={onRegister} className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all">Register as Coach</button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden"><Menu size={24} /></button>
      </div>
      {open && <div className="md:hidden bg-white border-t px-6 py-4 space-y-3">
        <a href="#coaches" className="block py-2 font-medium">Coaches</a><a href="#features" className="block py-2 font-medium">Features</a><a href="#pricing" className="block py-2 font-medium">Pricing</a>
        <a href={APP_URL} className="block py-2 font-medium text-emerald-700">Login</a>
        <button onClick={() => { onRegister(); setOpen(false); }} className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold">Register as Coach</button>
      </div>}
    </nav>
  );
};

const Hero = ({ onRegister }) => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/50" />
    <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-300/20 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-amber-200/30 to-orange-200/20 blur-3xl" />
    <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-8">
          <Zap size={16} /> Trusted by 500+ coaches across India
        </div>
        <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6" style={{fontFamily:'Satoshi,system-ui'}}>
          Your coaching<br/>business,<br/><span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">simplified.</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
          Schedule sessions, track progress, collect payments, and grow your client base — all from one platform built for Indian fitness coaches.
        </p>
        <div className="flex flex-wrap gap-4">
          <button onClick={onRegister} className="px-8 py-4 bg-slate-900 text-white rounded-2xl text-lg font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl shadow-slate-900/20">
            Register as Coach <ArrowRight size={20} />
          </button>
          <a href="#coaches" className="px-8 py-4 border-2 border-slate-200 rounded-2xl text-lg font-bold hover:border-slate-300 transition-all flex items-center gap-2">
            Find a Coach
          </a>
        </div>
        <div className="flex items-center gap-6 mt-10 text-sm text-slate-500">
          <div className="flex items-center gap-1.5"><Check size={16} className="text-emerald-500" /> Free to start</div>
          <div className="flex items-center gap-1.5"><Check size={16} className="text-emerald-500" /> Razorpay payments</div>
          <div className="flex items-center gap-1.5"><Check size={16} className="text-emerald-500" /> WhatsApp reminders</div>
        </div>
      </div>
      <div className="hidden lg:block relative">
        <div className="relative bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-6 border">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-white mb-4">
            <div className="text-sm opacity-80">Today's Sessions</div>
            <div className="text-4xl font-black mt-1">8 Clients</div>
            <div className="mt-3 bg-white/20 rounded-full h-2"><div className="bg-white rounded-full h-2 w-3/4" /></div>
            <div className="text-sm mt-1 opacity-80">6 completed</div>
          </div>
          <div className="space-y-3">
            {['Rahul — 9:00 AM — Strength','Ananya — 10:30 AM — HIIT','Vikram — 12:00 PM — Yoga'].map((s,i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-3"><div className={`w-10 h-10 rounded-lg ${i===0?'bg-emerald-500':i===1?'bg-blue-500':'bg-amber-500'} text-white flex items-center justify-center font-bold`}>{s[0]}</div><span className="font-medium text-sm">{s}</span></div>
                {i < 2 ? <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">Done</span> : <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Next</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border">
          <div className="text-xs text-slate-400">Monthly Revenue</div>
          <div className="text-2xl font-black text-emerald-600">₹1,24,000</div>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const feats = [
    { icon: Calendar, title: 'Smart Scheduling', desc: 'Plan sessions in bulk, set recurring schedules, and let clients see their upcoming slots.' },
    { icon: Dumbbell, title: 'Workout Library', desc: 'Build and import your exercise library. Assign custom plans per client with one click.' },
    { icon: TrendingUp, title: 'Progress Tracking', desc: 'Track weight, measurements, and photos. Show clients their transformation journey.' },
    { icon: Phone, title: 'WhatsApp Reminders', desc: 'Send session reminders and payment links directly via WhatsApp — no extra apps needed.' },
    { icon: Shield, title: 'Razorpay Payments', desc: 'Create payment links instantly. Clients pay online, you get paid directly to your bank.' },
    { icon: Users, title: 'Client Management', desc: 'Import clients from Excel, track attendance, manage profiles — all in one place.' },
  ];
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Everything you need</div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight" style={{fontFamily:'Satoshi,system-ui'}}>Built for how coaches<br/>actually work</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feats.map((f, i) => (
            <div key={i} className="group p-8 rounded-3xl border-2 border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-500 group-hover:text-white transition-all"><f.icon size={28} /></div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CoachProfiles = () => (
  <section id="coaches" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Top coaches</div>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tight" style={{fontFamily:'Satoshi,system-ui'}}>Train with the best</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {featuredCoaches.map((c, i) => (
          <div key={i} className="bg-white rounded-3xl border p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white flex items-center justify-center text-3xl font-black mb-6">{c.name[0]}</div>
            <h3 className="text-xl font-bold">{c.name}</h3>
            <div className="text-emerald-600 font-semibold text-sm mb-3">{c.specialization}</div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">{c.bio}</p>
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-1"><Star size={16} className="text-amber-400 fill-amber-400" /><span className="font-bold">{c.rating}</span><span className="text-slate-400 text-sm">({c.reviews})</span></div>
              <div className="flex items-center gap-1 text-slate-400 text-sm"><MapPin size={14} />{c.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = ({ onRegister }) => (
  <section id="pricing" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Simple pricing</div>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tight" style={{fontFamily:'Satoshi,system-ui'}}>Start free, scale as you grow</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((p, i) => (
          <div key={i} className={`relative rounded-3xl p-8 ${p.popular ? 'bg-slate-900 text-white ring-4 ring-emerald-400 shadow-2xl scale-105' : 'bg-white border-2'}`}>
            {p.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-sm font-bold rounded-full">Most Popular</div>}
            <h3 className="text-xl font-bold mb-2">{p.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              {p.price === 0 ? <span className="text-4xl font-black">Free</span> : <><span className="text-4xl font-black">₹{p.price.toLocaleString()}</span><span className={`text-sm ${p.popular ? 'text-slate-400' : 'text-slate-500'}`}>{p.period}</span></>}
            </div>
            <ul className="space-y-3 mb-8">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-sm"><Check size={16} className={p.popular ? 'text-emerald-400' : 'text-emerald-500'} />{f}</li>
              ))}
            </ul>
            <button onClick={onRegister} className={`w-full py-3.5 rounded-xl font-bold transition-all ${p.popular ? 'bg-emerald-500 text-white hover:bg-emerald-400' : 'bg-slate-100 hover:bg-slate-200'}`}>
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Social proof</div>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tight" style={{fontFamily:'Satoshi,system-ui'}}>Loved by coaches & clients</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border hover:shadow-lg transition-all">
            <div className="flex gap-0.5 mb-4">{[...Array(t.rating)].map((_, j) => <Star key={j} size={16} className="text-amber-400 fill-amber-400" />)}</div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
            <div><div className="font-bold text-sm">{t.name}</div><div className="text-xs text-slate-400">{t.role}</div></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2.5 mb-4"><div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center"><Dumbbell size={22} className="text-white" /></div><span className="text-xl font-black">CoachMe</span></div>
          <p className="text-slate-400 text-sm leading-relaxed">The all-in-one platform for fitness coaches in India.</p>
        </div>
        <div><h4 className="font-bold mb-4">Platform</h4><div className="space-y-2 text-sm text-slate-400"><a href="#features" className="block hover:text-white">Features</a><a href="#pricing" className="block hover:text-white">Pricing</a><a href="#coaches" className="block hover:text-white">Find a Coach</a></div></div>
        <div><h4 className="font-bold mb-4">Support</h4><div className="space-y-2 text-sm text-slate-400"><a href="mailto:hello@coachme.life" className="block hover:text-white">hello@coachme.life</a><a href="#" className="block hover:text-white">Help Center</a><a href="#" className="block hover:text-white">Privacy Policy</a></div></div>
        <div><h4 className="font-bold mb-4">Connect</h4><div className="space-y-2 text-sm text-slate-400"><a href="#" className="flex items-center gap-2 hover:text-white"><Instagram size={16} />Instagram</a><a href="#" className="flex items-center gap-2 hover:text-white"><Twitter size={16} />Twitter</a></div></div>
      </div>
      <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">&copy; {new Date().getFullYear()} CoachMe.life — Built in India, for Indian coaches.</div>
    </div>
  </footer>
);

// === REGISTER MODAL ===
const RegisterModal = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState('register');
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', specialization: 'strength', bio: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/coaches/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success || res.ok) {
        setSuccess(true);
      } else {
        alert(data.detail || data.message || 'Registration failed');
      }
    } catch (e) {
      alert('Registration failed: ' + e.message);
    }
    setLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // For now, redirect to the app
    window.location.href = APP_URL;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-xl"><X size={20} /></button>

          {success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4"><Check size={32} className="text-emerald-600" /></div>
              <h2 className="text-2xl font-black mb-2">Welcome to CoachMe!</h2>
              <p className="text-slate-500 mb-6">Your account has been created. Login to start managing your clients.</p>
              <a href={APP_URL} className="inline-block px-8 py-3 bg-slate-900 text-white rounded-xl font-bold">Go to Dashboard →</a>
            </div>
          ) : (
            <>
              <div className="flex gap-2 mb-8 bg-slate-100 rounded-xl p-1">
                <button onClick={() => setMode('register')} className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${mode === 'register' ? 'bg-white shadow' : ''}`}>Register</button>
                <button onClick={() => setMode('login')} className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${mode === 'login' ? 'bg-white shadow' : ''}`}>Login</button>
              </div>

              {mode === 'register' ? (
                <form onSubmit={handleRegister} className="space-y-4">
                  <h2 className="text-2xl font-black">Become a Coach</h2>
                  <p className="text-slate-500 text-sm mb-4">Create your profile and start accepting clients today.</p>
                  <div><label className="block text-sm font-semibold mb-1">Full Name *</label><input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border outline-none focus:border-emerald-500" /></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className="block text-sm font-semibold mb-1">Email *</label><input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border outline-none focus:border-emerald-500" /></div>
                    <div><label className="block text-sm font-semibold mb-1">Phone *</label><input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border outline-none focus:border-emerald-500" placeholder="+91..." /></div>
                  </div>
                  <div><label className="block text-sm font-semibold mb-1">Specialization</label>
                    <select value={form.specialization} onChange={e => setForm({...form, specialization: e.target.value})} className="w-full px-4 py-3 rounded-xl border outline-none">
                      <option value="strength">Strength & Conditioning</option><option value="yoga">Yoga</option><option value="hiit">HIIT / CrossFit</option><option value="cardio">Cardio / Running</option><option value="pilates">Pilates</option><option value="nutrition">Nutrition</option><option value="general">General Fitness</option>
                    </select></div>
                  <div><label className="block text-sm font-semibold mb-1">Short Bio</label><textarea value={form.bio} onChange={e => setForm({...form, bio: e.target.value})} rows={2} className="w-full px-4 py-3 rounded-xl border outline-none focus:border-emerald-500 resize-none" placeholder="Tell clients about your experience..." /></div>
                  <button type="submit" disabled={loading} className="w-full py-3.5 bg-slate-900 text-white rounded-xl font-bold disabled:opacity-50">{loading ? 'Creating account...' : 'Create Coach Account'}</button>
                </form>
              ) : (
                <form onSubmit={handleLogin} className="space-y-4">
                  <h2 className="text-2xl font-black">Welcome back</h2>
                  <p className="text-slate-500 text-sm mb-4">Login to your coach dashboard.</p>
                  <div><label className="block text-sm font-semibold mb-1">Email</label><input required type="email" className="w-full px-4 py-3 rounded-xl border outline-none focus:border-emerald-500" /></div>
                  <div><label className="block text-sm font-semibold mb-1">Password</label><input required type="password" className="w-full px-4 py-3 rounded-xl border outline-none focus:border-emerald-500" /></div>
                  <button type="submit" className="w-full py-3.5 bg-slate-900 text-white rounded-xl font-bold">Login →</button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// === MAIN APP ===
function App() {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <div style={{fontFamily:'"Satoshi",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif'}}>
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap" rel="stylesheet" />
      <Nav onRegister={() => setShowRegister(true)} />
      <Hero onRegister={() => setShowRegister(true)} />
      <Features />
      <CoachProfiles />
      <Pricing onRegister={() => setShowRegister(true)} />
      <Testimonials />
      <Footer />
      <RegisterModal isOpen={showRegister} onClose={() => setShowRegister(false)} />
    </div>
  );
}

export default App;
