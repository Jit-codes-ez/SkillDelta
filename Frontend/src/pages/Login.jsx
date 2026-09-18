import React, { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Sparkles,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.password) {
      newErrors.password = "Please enter your password.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Temporary login action.
    // Replace this later with your actual authentication API.
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#FFFBF1] text-[#850E35] pt-20 md:pt-24">
      <div className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#FFFBF1]">
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid min-h-[calc(100vh-160px)] items-center gap-10 lg:grid-cols-[1fr_0.9fr]">

            {/* LEFT CONTENT */}
            <div className="hidden lg:block" data-reveal>
              <div className="mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E36A6A]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#850E35]/45">
                  Skill Intelligence Platform
                </span>
              </div>

              <h1 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-tight xl:text-6xl">
                Continue building
                <br />
                <span className="text-[#E36A6A]">
                  your career.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#850E35]/55">
                Sign in to your SkillDelta account and continue
                tracking your skills, closing skill gaps and
                progressing toward your career goals.
              </p>

              <div className="mt-9 space-y-5">
                <Feature
                  icon={<Sparkles size={16} />}
                  title="Personalized skill analysis"
                  description="Review your current proficiency and identify what to learn next."
                />

                <Feature
                  icon={<BriefcaseBusiness size={16} />}
                  title="Career-focused roadmap"
                  description="Continue working toward the skills required for your target role."
                />

                <Feature
                  icon={<ShieldCheck size={16} />}
                  title="Track your progress"
                  description="Keep your learning progress and career readiness in one place."
                />
              </div>

              <div className="mt-12 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#850E35]/30">
                <span className="h-px w-10 bg-[#850E35]/15" />
                Research v1.2
                <span className="h-px w-10 bg-[#850E35]/15" />
              </div>
            </div>

            {/* LOGIN CARD */}
            <div className="mx-auto w-full max-w-[520px]" data-reveal>
              <div className="rounded-3xl border border-[#850E35]/10 bg-white p-6 shadow-[0_20px_60px_rgba(133,14,53,0.08)] sm:p-8">

                {/* CARD HEADER */}
                <div className="mb-7">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#850E35] text-white">
                    <Sparkles size={18} />
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight">
                    Welcome back
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-[#850E35]/50">
                    Sign in to continue your SkillDelta journey.
                  </p>
                </div>

                {/* LOGIN FORM */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate
                >
                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold"
                    >
                      Email address
                    </label>

                    <div className="relative">
                      <Mail
                        size={16}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#850E35]/35"
                      />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className={`w-full rounded-xl border bg-[#FFFBF1] py-3 pl-10 pr-4 text-sm text-[#850E35] outline-none transition placeholder:text-[#850E35]/30 focus:bg-white focus:ring-2 focus:ring-[#E36A6A]/20 ${
                          errors.email
                            ? "border-red-400"
                            : "border-[#850E35]/10 focus:border-[#850E35]/30"
                        }`}
                      />
                    </div>

                    {errors.email && (
                      <ErrorMessage text={errors.email} />
                    )}
                  </div>

                  {/* PASSWORD */}
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-xs font-semibold"
                      >
                        Password
                      </label>

                      <button
                        type="button"
                        className="text-[10px] font-semibold text-[#850E35]/55 transition hover:text-[#E36A6A]"
                        onClick={() =>
                          alert(
                            "Password reset will be available once the authentication API is connected."
                          )
                        }
                      >
                        Forgot password?
                      </button>
                    </div>

                    <div className="relative">
                      <Lock
                        size={16}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#850E35]/35"
                      />

                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        className={`w-full rounded-xl border bg-[#FFFBF1] py-3 pl-10 pr-11 text-sm text-[#850E35] outline-none transition placeholder:text-[#850E35]/30 focus:bg-white focus:ring-2 focus:ring-[#E36A6A]/20 ${
                          errors.password
                            ? "border-red-400"
                            : "border-[#850E35]/10 focus:border-[#850E35]/30"
                        }`}
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword((prev) => !prev)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-[#850E35]/40 hover:bg-[#FFF5E4] hover:text-[#850E35]"
                        aria-label={
                          showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                      </button>
                    </div>

                    {errors.password && (
                      <ErrorMessage text={errors.password} />
                    )}
                  </div>

                  {/* REMEMBER ME */}
                  <div className="pt-1">
                    <label className="flex cursor-pointer items-center gap-3">
                      <input
                        type="checkbox"
                        name="remember"
                        checked={formData.remember}
                        onChange={handleChange}
                        className="h-4 w-4 accent-[#850E35]"
                      />

                      <span className="text-[10px] font-medium text-[#850E35]/55">
                        Remember me
                      </span>
                    </label>
                  </div>

                  {/* LOGIN BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#850E35] py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#6F0A2B] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Signing in...
                      </>
                    ) : (
                      <>
                        Sign in
                        <ArrowRight
                          size={15}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </>
                    )}
                  </button>
                </form>

                {/* REGISTER */}
                <div className="mt-6 border-t border-[#850E35]/10 pt-5 text-center">
                  <p className="text-xs text-[#850E35]/50">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="font-bold text-[#850E35] transition hover:text-[#E36A6A]"
                    >
                      Create account
                    </Link>
                  </p>
                </div>
              </div>

              {/* SECURITY MESSAGE */}
              <div className="mt-4 flex items-center justify-center gap-2 text-[9px] font-medium uppercase tracking-wider text-[#850E35]/35">
                <ShieldCheck size={12} />
                Your account information is protected
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* FEATURE COMPONENT */
function Feature({ icon, title, description }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFF5E4] text-[#850E35]">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-bold">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-[#850E35]/50">
          {description}
        </p>
      </div>
    </div>
  );
}

/* ERROR MESSAGE */
function ErrorMessage({ text }) {
  return (
    <p className="mt-1.5 text-[10px] font-medium text-red-500">
      {text}
    </p>
  );
}