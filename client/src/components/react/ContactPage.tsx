import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";

const BUDGET_OPTIONS = ["Under $5k", "$5k – $15k", "$15k – $50k", "$50k+", "Let's talk"];

type Step = "intro" | "name" | "email" | "project" | "budget" | "success";
const FORM_STEPS: Step[] = ["name", "email", "project", "budget"];

const stepVariants = {
	enter: (dir: number) => ({ opacity: 0, y: dir * 56 }),
	center: { opacity: 1, y: 0 },
	exit: (dir: number) => ({ opacity: 0, y: dir * -56 }),
};
const stepTransition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

// ─── Eyebrow ─────────────────────────────────────────────────────────────────

const Eyebrow = ({ label }: { label: string }) => (
	<motion.div
		initial={{ opacity: 0, x: -12 }}
		animate={{ opacity: 1, x: 0 }}
		transition={{ duration: 0.45, ease: "easeOut" }}
		className="flex items-center gap-3"
	>
		<motion.span
			initial={{ scaleX: 0 }}
			animate={{ scaleX: 1 }}
			transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
			style={{ originX: 0 }}
			className="block w-8 h-px bg-white/30"
		/>
		<span className="text-white/40 text-xs font-mono uppercase tracking-widest">{label}</span>
	</motion.div>
);

// ─── Step shell ───────────────────────────────────────────────────────────────

const StepShell = ({
	direction,
	children,
}: {
	direction: number;
	children: React.ReactNode;
}) => (
	<motion.div
		custom={direction}
		variants={stepVariants}
		initial="enter"
		animate="center"
		exit="exit"
		transition={stepTransition}
		className="w-full max-w-2xl flex flex-col"
	>
		{children}
	</motion.div>
);

// ─── Step question + subtext ──────────────────────────────────────────────────

const StepQuestion = ({ question, subtext }: { question: string; subtext: string }) => (
	<>
		<motion.p
			initial={{ opacity: 0, y: 8 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.08 }}
			className="text-white/30 text-xs font-mono uppercase tracking-widest mb-4"
		>
			{subtext}
		</motion.p>
		<motion.h2
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			className="font-bold leading-tight mb-10"
			style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
		>
			{question}
		</motion.h2>
	</>
);

// ─── Continue row ─────────────────────────────────────────────────────────────

const ContinueRow = ({
	onNext,
	disabled,
	label = "Continue →",
	hint,
}: {
	onNext: () => void;
	disabled: boolean;
	label?: string;
	hint?: string;
}) => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ delay: 0.35, duration: 0.4 }}
		className="flex items-center justify-between mt-8"
	>
		<span className="text-white/20 text-xs font-mono">{hint ?? "Press Enter ↵"}</span>
		<button
			onClick={onNext}
			disabled={disabled}
			className="inline-flex items-center gap-2 bg-white text-black font-semibold px-7 py-3.5 rounded-full text-sm disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/90 transition-all duration-200"
		>
			{label}
		</button>
	</motion.div>
);

// ─── Underline input style ────────────────────────────────────────────────────

const underlineInput =
	"w-full bg-transparent border-b-2 border-white/15 focus:border-white/50 text-white py-4 placeholder-white/15 focus:outline-none transition-colors duration-300";

// ─── Steps ────────────────────────────────────────────────────────────────────

const NameStep = ({
	direction,
	value,
	onChange,
	onNext,
}: {
	direction: number;
	value: string;
	onChange: (v: string) => void;
	onNext: () => void;
}) => (
	<StepShell direction={direction}>
		<StepQuestion question="First, what's your name?" subtext="01 — About you" />
		<motion.input
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.18 }}
			type="text"
			value={value}
			onChange={(e) => onChange(e.target.value)}
			onKeyDown={(e) => e.key === "Enter" && value.trim() && onNext()}
			placeholder="Your name"
			autoFocus
			className={`${underlineInput} text-2xl lg:text-3xl`}
		/>
		<ContinueRow onNext={onNext} disabled={!value.trim()} />
	</StepShell>
);

const EmailStep = ({
	direction,
	firstName,
	value,
	onChange,
	onNext,
}: {
	direction: number;
	firstName: string;
	value: string;
	onChange: (v: string) => void;
	onNext: () => void;
}) => (
	<StepShell direction={direction}>
		<StepQuestion
			question={`Nice to meet you${firstName ? `, ${firstName}` : ""}. What's your email?`}
			subtext="02 — Contact"
		/>
		<motion.input
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.18 }}
			type="email"
			value={value}
			onChange={(e) => onChange(e.target.value)}
			onKeyDown={(e) => e.key === "Enter" && value.trim() && onNext()}
			placeholder="your@email.com"
			autoFocus
			className={`${underlineInput} text-2xl lg:text-3xl`}
		/>
		<ContinueRow onNext={onNext} disabled={!value.trim()} />
	</StepShell>
);

const ProjectStep = ({
	direction,
	value,
	onChange,
	onNext,
}: {
	direction: number;
	value: string;
	onChange: (v: string) => void;
	onNext: () => void;
}) => (
	<StepShell direction={direction}>
		<StepQuestion question="Tell us what you're building." subtext="03 — The project" />
		<motion.textarea
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.18 }}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			onKeyDown={(e) => {
				if (e.key === "Enter" && !e.shiftKey && value.trim()) {
					e.preventDefault();
					onNext();
				}
			}}
			placeholder="We're working on..."
			autoFocus
			rows={4}
			className={`${underlineInput} text-xl lg:text-2xl resize-none`}
		/>
		<ContinueRow onNext={onNext} disabled={!value.trim()} hint="Shift+Enter for new line" />
	</StepShell>
);

const BudgetStep = ({
	direction,
	value,
	onChange,
	onNext,
	submitting = false,
}: {
	direction: number;
	value: string;
	onChange: (v: string) => void;
	onNext: () => void;
	submitting?: boolean;
}) => (
	<StepShell direction={direction}>
		<StepQuestion question="What's your budget range?" subtext="04 — Investment" />
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.18 }}
			className="flex flex-wrap gap-3 mb-2"
		>
			{BUDGET_OPTIONS.map((option, i) => (
				<motion.button
					key={option}
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.35, delay: 0.22 + i * 0.06 }}
					whileTap={{ scale: 0.96 }}
					onClick={() => onChange(option)}
					className={`text-base px-6 py-3 rounded-full border transition-all duration-200 ${
						value === option
							? "bg-white text-black border-white"
							: "border-white/15 text-white/50 hover:border-white/40 hover:text-white/90"
					}`}
				>
					{option}
				</motion.button>
			))}
		</motion.div>
		<ContinueRow
			onNext={onNext}
			disabled={!value || submitting}
			label={submitting ? "Sending…" : "Send message →"}
			hint="Select one to continue"
		/>
	</StepShell>
);

// ─── Main component ───────────────────────────────────────────────────────────

const ContactPage = () => {
	const [step, setStep] = useState<Step>("intro");
	const [direction, setDirection] = useState(1);
	const [formData, setFormData] = useState({ name: "", email: "", project: "", budget: "" });
	const [submitting, setSubmitting] = useState(false);

	const cursorX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
	const cursorY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
	const springX = useSpring(cursorX, { stiffness: 50, damping: 18 });
	const springY = useSpring(cursorY, { stiffness: 50, damping: 18 });

	const go = (next: Step, dir = 1) => {
		setDirection(dir);
		setStep(next);
	};

	const goBack = () => {
		const idx = FORM_STEPS.indexOf(step as typeof FORM_STEPS[number]);
		if (idx === 0) go("intro", -1);
		else if (idx > 0) go(FORM_STEPS[idx - 1], -1);
	};

	const handleSubmit = async () => {
		setSubmitting(true);
		try {
			await fetch("https://formsubmit.co/ajax/hello@sudocreate.studio", {
				method: "POST",
				headers: { "Content-Type": "application/json", Accept: "application/json" },
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					message: formData.project,
					budget: formData.budget,
					_subject: `New inquiry from ${formData.name}`,
					_template: "table",
					_captcha: "false",
				}),
			});
		} finally {
			setSubmitting(false);
			go("success");
		}
	};

	const progressIndex = FORM_STEPS.indexOf(step as typeof FORM_STEPS[number]);
	const showHeader = step !== "intro" && step !== "success";

	const firstName = formData.name.split(" ")[0];

	return (
		<div
			className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col"
			onMouseMove={(e) => {
				cursorX.set(e.clientX);
				cursorY.set(e.clientY);
			}}
		>
			{/* Ambient cursor glow */}
			<motion.div
				className="fixed pointer-events-none w-[700px] h-[700px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"
				style={{
					left: springX,
					top: springY,
					background:
						"radial-gradient(circle, rgba(255,255,255,0.045) 0%, transparent 65%)",
				}}
			/>

			{/* Subtle grain texture */}
			<div
				className="fixed inset-0 pointer-events-none opacity-[0.025] z-0"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
					backgroundSize: "300px 300px",
				}}
			/>

			{/* Top bar: back + progress */}
			<AnimatePresence>
				{showHeader && (
					<motion.div
						initial={{ opacity: 0, y: -16 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -16 }}
						transition={{ duration: 0.4 }}
						className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-6 lg:px-12 py-6"
					>
						<button
							onClick={goBack}
							className="text-white/30 hover:text-white text-sm font-mono transition-colors duration-200"
						>
							← Back
						</button>

						{/* Progress pills */}
						<div className="flex items-center gap-2">
							{FORM_STEPS.map((s, i) => (
								<motion.div
									key={s}
									animate={{
										width: s === step ? 22 : 6,
										backgroundColor:
											s === step
												? "#ffffff"
												: i < progressIndex
												? "rgba(255,255,255,0.45)"
												: "rgba(255,255,255,0.15)",
									}}
									transition={{ duration: 0.3 }}
									className="h-[5px] rounded-full"
								/>
							))}
						</div>

						<span className="text-white/20 text-xs font-mono tabular-nums">
							{String(progressIndex + 1).padStart(2, "0")} / 04
						</span>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Content */}
			<div className="relative z-10 flex-1 flex items-center justify-center px-6 lg:px-16">
				<AnimatePresence mode="wait" custom={direction}>
					{/* ── Intro ── */}
					{step === "intro" && (
						<motion.div
							key="intro"
							custom={direction}
							variants={stepVariants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={stepTransition}
							className="flex flex-col items-center text-center max-w-3xl w-full"
						>
							<div className="mb-16">
								<Eyebrow label="Get in touch" />
							</div>

							{/* Staggered headline */}
							<div className="flex flex-col items-center mb-10" style={{ gap: "0.04em" }}>
								{["Start", "something", "great."].map((word, i) => (
									<div key={i} className="overflow-hidden">
										<motion.h1
											initial={{ y: "110%" }}
											animate={{ y: 0 }}
											transition={{
												duration: 0.9,
												delay: 0.1 + i * 0.13,
												ease: [0.22, 1, 0.36, 1],
											}}
											className="font-bold leading-[0.88] text-center"
											style={{ fontSize: "clamp(4.5rem, 12vw, 9.5rem)" }}
										>
											{word}
										</motion.h1>
									</div>
								))}
							</div>

							<motion.p
								initial={{ opacity: 0, y: 14 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.55, delay: 0.55, ease: "easeOut" }}
								className="text-white/40 text-lg leading-relaxed max-w-md mb-16"
							>
								Tell us about your project and we'll get back to you within one business day.
							</motion.p>

							<motion.div
								initial={{ opacity: 0, scale: 0.92 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.4, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
								className="flex flex-col items-center gap-5"
							>
								<button
									onClick={() => go("name")}
									className="inline-flex items-center gap-3 bg-white text-black font-semibold px-10 py-5 rounded-full hover:bg-white/90 transition-all duration-300 text-lg"
								>
									Let's go
									<motion.span
										animate={{ x: [0, 4, 0] }}
										transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
									>
										→
									</motion.span>
								</button>

								<a
									href="mailto:hello@sudocreate.studio"
									className="text-white/25 text-sm font-mono hover:text-white/55 transition-colors duration-300"
								>
									or email hello@sudocreate.studio
								</a>
							</motion.div>
						</motion.div>
					)}

					{/* ── Name ── */}
					{step === "name" && (
						<NameStep
							key="name"
							direction={direction}
							value={formData.name}
							onChange={(v) => setFormData((p) => ({ ...p, name: v }))}
							onNext={() => go("email")}
						/>
					)}

					{/* ── Email ── */}
					{step === "email" && (
						<EmailStep
							key="email"
							direction={direction}
							firstName={firstName}
							value={formData.email}
							onChange={(v) => setFormData((p) => ({ ...p, email: v }))}
							onNext={() => go("project")}
						/>
					)}

					{/* ── Project ── */}
					{step === "project" && (
						<ProjectStep
							key="project"
							direction={direction}
							value={formData.project}
							onChange={(v) => setFormData((p) => ({ ...p, project: v }))}
							onNext={() => go("budget")}
						/>
					)}

					{/* ── Budget ── */}
					{step === "budget" && (
						<BudgetStep
							key="budget"
							direction={direction}
							value={formData.budget}
							onChange={(v) => setFormData((p) => ({ ...p, budget: v }))}
							onNext={handleSubmit}
							submitting={submitting}
						/>
					)}

					{/* ── Success ── */}
					{step === "success" && (
						<motion.div
							key="success"
							custom={direction}
							variants={stepVariants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={stepTransition}
							className="flex flex-col items-center text-center max-w-xl w-full"
						>
							<motion.div
								initial={{ scale: 0, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
								className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center text-2xl mb-12"
							>
								✓
							</motion.div>

							<div className="flex flex-col items-center mb-8" style={{ gap: "0.04em" }}>
								{["Message", "received."].map((word, i) => (
									<div key={i} className="overflow-hidden">
										<motion.h2
											initial={{ y: "110%" }}
											animate={{ y: 0 }}
											transition={{
												duration: 0.85,
												delay: 0.2 + i * 0.12,
												ease: [0.22, 1, 0.36, 1],
											}}
											className="font-bold leading-[0.9] text-center"
											style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
										>
											{word}
										</motion.h2>
									</div>
								))}
							</div>

							<motion.p
								initial={{ opacity: 0, y: 14 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
								className="text-white/40 text-lg mb-12 leading-relaxed"
							>
								We'll be in touch within one business day
								{firstName ? `, ${firstName}` : ""}.
							</motion.p>

							<motion.a
								href="/"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.75, duration: 0.4 }}
								className="text-white/25 text-sm font-mono hover:text-white/55 transition-colors duration-300"
							>
								← Back to home
							</motion.a>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default ContactPage;
