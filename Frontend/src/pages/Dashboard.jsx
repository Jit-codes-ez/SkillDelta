import React from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronRight,
  CircleCheck,
  Code2,
  Flame,
  Gauge,
  GraduationCap,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const growthData = [
  { month: "Apr", score: 54 },
  { month: "May", score: 59 },
  { month: "Jun", score: 63 },
  { month: "Jul", score: 67 },
  { month: "Aug", score: 72 },
  { month: "Sep", score: 78 },
];

const skills = [
  { name: "Java", score: 88 },
  { name: "SQL", score: 84 },
  { name: "React", score: 78 },
  { name: "Python", score: 74 },
  { name: "Spring Boot", score: 67 },
  { name: "Machine Learning", score: 54 },
];

const gaps = [
  {
    name: "Spring Security",
    level: "High Priority",
    score: 42,
    description: "Authentication, authorization and JWT security",
  },
  {
    name: "Docker",
    level: "Medium Priority",
    score: 58,
    description: "Containers, images and Docker Compose",
  },
  {
    name: "AWS",
    level: "Low Priority",
    score: 71,
    description: "Cloud deployment and basic AWS services",
  },
];

const recommendations = [
  {
    title: "Spring Security",
    category: "Backend",
    progress: 35,
    lessons: "8 lessons",
    time: "3h 20m",
  },
  {
    title: "Docker Fundamentals",
    category: "DevOps",
    progress: 20,
    lessons: "6 lessons",
    time: "2h 40m",
  },
  {
    title: "AWS Essentials",
    category: "Cloud",
    progress: 0,
    lessons: "10 lessons",
    time: "4h 10m",
  },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function ProgressBar({ value }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-[#FFF5E4]">
      <div
        className="h-full rounded-full bg-[#850E35] transition-all duration-700"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

function StatCard({ icon: Icon, label, value, change, description }) {
  return (
    <div className="group rounded-2xl border border-[#850E35]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#850E35]/25 hover:shadow-md card-interactive">
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#850E35]/10 bg-[#FFF5E4] text-[#850E35] transition-colors group-hover:bg-[#850E35] group-hover:text-white">
          <Icon size={19} />
        </div>

        {change && (
          <span className="flex items-center gap-1 rounded-full border border-[#E36A6A]/20 bg-[#FFF5E4] px-2.5 py-1 text-[11px] font-semibold text-[#850E35]">
            <TrendingUp size={12} />
            {change}
          </span>
        )}
      </div>

      <p className="text-xs font-medium uppercase tracking-wider text-[#850E35]/50">
        {label}
      </p>

      <h3 className="mt-1 text-3xl font-bold tracking-tight text-[#850E35]">
        {value}
      </h3>

      <p className="mt-2 text-xs text-[#850E35]/55">
        {description}
      </p>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#FFFBF1] text-[#850E35] pt-24">
      <div className="bg-[#FFFBF1]">
        <div className="mx-auto max-w-[1450px] px-4 py-7 sm:px-6 lg:px-8 lg:py-9">

          {/* =========================================================
              WELCOME
          ========================================================== */}
          <section id="dashboard-home" className="mb-8 scroll-mt-24">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E36A6A]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#850E35]/45">
                    Skill Intelligence Dashboard
                  </span>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-[#850E35] sm:text-4xl">
                  Good evening, Saini.
                </h1>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[#850E35]/55">
                  Track your skills, identify gaps and build the roadmap
                  you need for your next career goal.
                </p>
              </div>

              <button
                type="button"
                onClick={() => scrollToSection("skill-profile")}
                className="flex w-fit items-center gap-2 rounded-xl bg-[#850E35] px-5 py-3 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#6e092c] active:translate-y-0"
              >
                <Sparkles size={15} />
                Analyze My Skills
              </button>
            </div>
          </section>

          {/* =========================================================
              STATS
          ========================================================== */}
          <section className="mb-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              icon={Gauge}
              label="Overall Skill Score"
              value="78"
              change="+6.4%"
              description="Compared with last month"
            />

            <StatCard
              icon={Code2}
              label="Skills Tracked"
              value="18"
              change="+3"
              description="Across 4 technology areas"
            />

            <StatCard
              icon={Target}
              label="Skill Gaps"
              value="5"
              change="-2"
              description="2 high-priority gaps remaining"
            />

            <StatCard
              icon={Flame}
              label="Learning Streak"
              value="12"
              description="Days of continuous progress"
            />
          </section>

          {/* =========================================================
              SKILLS + CAREER READINESS
          ========================================================== */}
          <section className="mb-7 grid gap-5 xl:grid-cols-[1.5fr_0.8fr]">

            {/* Skill Profile */}
            <div
              id="skill-profile"
              className="scroll-mt-24 rounded-2xl border border-[#850E35]/10 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF5E4] text-[#850E35]">
                      <Code2 size={15} />
                    </div>

                    <h2 className="text-base font-bold text-[#850E35]">
                      Your Skill Profile
                    </h2>
                  </div>

                  <p className="mt-2 text-xs text-[#850E35]/50">
                    Current proficiency across your tracked technologies
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSection("skill-profile")}
                  className="hidden items-center gap-1 text-[11px] font-bold text-[#850E35] transition hover:text-[#E36A6A] sm:flex"
                >
                  View all
                  <ArrowUpRight size={13} />
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-xl border border-[#850E35]/8 bg-[#FFFBF1] p-4"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#850E35]">
                        {skill.name}
                      </span>

                      <span className="text-xs font-bold text-[#E36A6A]">
                        {skill.score}%
                      </span>
                    </div>

                    <ProgressBar value={skill.score} />
                  </div>
                ))}
              </div>
            </div>

            {/* Career Readiness */}
            <div className="relative overflow-hidden rounded-2xl border border-[#850E35]/10 bg-[#850E35] p-6 text-white shadow-sm">
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-white/10" />
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/10" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                      Career Readiness
                    </p>

                    <h2 className="mt-1 text-lg font-bold">
                      Full Stack Developer
                    </h2>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                    <BriefcaseBusiness size={17} />
                  </div>
                </div>

                <div className="mb-7 flex items-center gap-5">
                  <div className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-[7px] border-[#E36A6A]/40">
                    <div className="text-center">
                      <div className="text-3xl font-bold">
                        76
                      </div>

                      <div className="text-[9px] uppercase tracking-wider text-white/50">
                        Ready
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-xs leading-5 text-white/65">
                      You're getting close. Complete your priority gaps to
                      improve your job readiness.
                    </p>

                    <div className="mt-4">
                      <div className="mb-1.5 flex justify-between text-[10px]">
                        <span className="text-white/50">
                          Readiness
                        </span>

                        <span className="font-bold">
                          76%
                        </span>
                      </div>

                      <div className="h-1.5 rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-[#E36A6A]"
                          style={{ width: "76%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 border-t border-white/10 pt-5">
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CircleCheck
                      size={14}
                      className="text-[#E36A6A]"
                    />
                    Java
                  </div>

                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CircleCheck
                      size={14}
                      className="text-[#E36A6A]"
                    />
                    React
                  </div>

                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CircleCheck
                      size={14}
                      className="text-[#E36A6A]"
                    />
                    SQL
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSection("skill-gaps")}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-xs font-bold text-[#850E35] transition hover:bg-[#FFF5E4] active:scale-[0.99]"
                >
                  View Career Roadmap
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </section>

          {/* =========================================================
              SKILL GAPS
          ========================================================== */}
          <section
            id="skill-gaps"
            className="mb-7 scroll-mt-24 rounded-2xl border border-[#850E35]/10 bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="mb-6 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF5E4] text-[#850E35]">
                    <Target size={15} />
                  </div>

                  <h2 className="text-base font-bold text-[#850E35]">
                    Priority Skill Gaps
                  </h2>
                </div>

                <p className="mt-2 text-xs text-[#850E35]/50">
                  Skills that will have the biggest impact on your target
                  career
                </p>
              </div>

              <button
                type="button"
                onClick={() => scrollToSection("learning")}
                className="hidden items-center gap-1 text-[11px] font-bold text-[#850E35] transition hover:text-[#E36A6A] sm:flex"
              >
                Explore gaps
                <ArrowUpRight size={13} />
              </button>
            </div>

            <div className="space-y-3">
              {gaps.map((gap, index) => (
                <div
                  key={gap.name}
                  className="group grid gap-4 rounded-xl border border-[#850E35]/8 bg-[#FFFBF1] p-4 transition hover:border-[#850E35]/20 md:grid-cols-[35px_1fr_150px_110px]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[11px] font-bold text-[#850E35]/45">
                    0{index + 1}
                  </div>

                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <h3 className="text-sm font-bold text-[#850E35]">
                        {gap.name}
                      </h3>

                      <span className="rounded-full bg-[#FFF5E4] px-2 py-0.5 text-[9px] font-bold text-[#E36A6A]">
                        {gap.level}
                      </span>
                    </div>

                    <p className="text-xs text-[#850E35]/50">
                      {gap.description}
                    </p>
                  </div>

                  <div className="self-center">
                    <div className="mb-1.5 flex justify-between text-[9px] font-semibold text-[#850E35]/50">
                      <span>Current level</span>
                      <span>{gap.score}%</span>
                    </div>

                    <ProgressBar value={gap.score} />
                  </div>

                  <button
                    type="button"
                    onClick={() => scrollToSection("learning")}
                    className="flex items-center justify-center gap-1 self-center rounded-lg border border-[#850E35]/15 bg-white px-3 py-2 text-[10px] font-bold text-[#850E35] transition hover:bg-[#850E35] hover:text-white"
                  >
                    Improve
                    <ChevronRight size={12} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* =========================================================
              GROWTH + LEARNING
          ========================================================== */}
          <section className="grid gap-5 xl:grid-cols-[1.35fr_1fr]">

            {/* Growth Chart */}
            <div
              id="growth"
              className="scroll-mt-24 rounded-2xl border border-[#850E35]/10 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF5E4] text-[#850E35]">
                      <TrendingUp size={15} />
                    </div>

                    <h2 className="text-base font-bold text-[#850E35]">
                      Skill Growth
                    </h2>
                  </div>

                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-2xl font-bold text-[#850E35]">
                      +24
                    </span>

                    <span className="pb-1 text-[10px] font-semibold text-[#E36A6A]">
                      points in 6 months
                    </span>
                  </div>
                </div>

                <span className="rounded-full border border-[#850E35]/10 bg-[#FFF5E4] px-2.5 py-1 text-[9px] font-bold text-[#850E35]/60">
                  6 MONTHS
                </span>
              </div>

              <div className="h-[240px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growthData}>
                    <defs>
                      <linearGradient
                        id="skillFill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#850E35"
                          stopOpacity={0.22}
                        />

                        <stop
                          offset="100%"
                          stopColor="#850E35"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>

                    <CartesianGrid
                      stroke="#850E35"
                      strokeOpacity={0.07}
                      vertical={false}
                    />

                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fill: "#850E35",
                        opacity: 0.45,
                        fontSize: 10,
                      }}
                    />

                    <YAxis
                      domain={[40, 100]}
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fill: "#850E35",
                        opacity: 0.4,
                        fontSize: 9,
                      }}
                    />

                    <Tooltip
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid rgba(133,14,53,.1)",
                        background: "#FFFBF1",
                        color: "#850E35",
                        fontSize: "11px",
                      }}
                    />

                    <Area
                      type="monotone"
                      dataKey="score"
                      stroke="#850E35"
                      strokeWidth={2.5}
                      fill="url(#skillFill)"
                      dot={{
                        r: 3,
                        fill: "#850E35",
                        strokeWidth: 0,
                      }}
                      activeDot={{
                        r: 5,
                        fill: "#E36A6A",
                      }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recommended Learning */}
            <div
              id="learning"
              className="scroll-mt-24 rounded-2xl border border-[#850E35]/10 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF5E4] text-[#850E35]">
                      <Sparkles size={15} />
                    </div>

                    <h2 className="text-base font-bold text-[#850E35]">
                      Recommended Learning
                    </h2>
                  </div>

                  <p className="mt-2 text-xs text-[#850E35]/50">
                    Personalized for your current skill gaps
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {recommendations.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-[#850E35]/8 bg-[#FFFBF1] p-4 transition hover:border-[#850E35]/20"
                  >
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF5E4] text-[#850E35]">
                          <GraduationCap size={16} />
                        </div>

                        <div>
                          <h3 className="text-xs font-bold text-[#850E35]">
                            {item.title}
                          </h3>

                          <p className="mt-0.5 text-[9px] text-[#850E35]/45">
                            {item.category} · {item.lessons} · {item.time}
                          </p>
                        </div>
                      </div>

                      <span className="text-[10px] font-bold text-[#E36A6A]">
                        {item.progress}%
                      </span>
                    </div>

                    <ProgressBar value={item.progress} />

                    <button
                      type="button"
                      onClick={() => {
                        // Temporary action until real learning pages are connected.
                        scrollToSection("learning");
                      }}
                      className="mt-3 flex items-center gap-1 text-[10px] font-bold text-[#850E35] transition hover:text-[#E36A6A]"
                    >
                      {item.progress > 0
                        ? "Continue learning"
                        : "Start learning"}

                      <ChevronRight size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}