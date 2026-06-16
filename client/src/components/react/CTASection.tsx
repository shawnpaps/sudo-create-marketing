import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";

const HEADLINE = ["Let's shape", "how your brand", "is seen."];
const BUDGET_OPTIONS = ["Under $5k", "$5k – $15k", "$15k – $50k", "$50k+", "Let's talk"];

type FormState = "idle" | "open" | "submitted";

// ─── Magnetic button ────────────────────────────────────────────────────────

const MagneticButton = ({
	onClick,
	children,
}: {
	onClick: () => void;
	children: React.ReactNode;
}) => {
	const ref = useRef<HTMLButtonElement>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const springX = useSpring(x, { stiffness: 180, damping: 14 });
	const springY = useSpring(y, { stiffness: 180, damping: 14 });

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		x.set((e.clientX - (rect.left + rect.width / 2)) * 0.38);
		y.set((e.clientY - (rect.top + rect.height / 2)) * 0.38);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.button
			ref={ref}
			onClick={onClick}
			style={{ x: springX, y: springY }}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			whileTap={{ scale: 0.96 }}
			className="relative inline-flex items-center gap-3 bg-black text-white text-lg font-semibold px-10 py-5 rounded-full cursor-pointer select-none"
		>
			{children}
		</motion.button>
	);
};

// ─── Field wrapper with stagger ─────────────────────────────────────────────

const Field = ({ children, index }: { children: React.ReactNode; index: number }) => (
	<motion.div
		initial={{ opacity: 0, y: 16 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.4, delay: 0.1 + index * 0.07, ease: "easeOut" }}
	>
		{children}
	</motion.div>
);

// ─── Main section ────────────────────────────────────────────────────────────

const CTASection = () => {
	const [formState, setFormState] = useState<FormState>("idle");
	const [budget, setBudget] = useState("");
	const [formData, setFormData] = useState({ name: "", email: "", description: "" });
	const [submitting, setSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitting(true);
		try {
			await fetch("https://formsubmit.co/ajax/hello@sudocreate.studio", {
				method: "POST",
				headers: { "Content-Type": "application/json", Accept: "application/json" },
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					message: formData.description,
					budget,
					_subject: `New inquiry from ${formData.name}`,
					_template: "table",
					_captcha: "false",
				}),
			});
		} finally {
			setSubmitting(false);
			setFormState("submitted");
		}
	};

	const inputClass =
		"w-full bg-white/8 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-white/30 transition-colors duration-200";

	return (
		<section
			className="relative min-h-screen flex flex-col items-center justify-center text-black overflow-hidden px-6 py-32 bg-white"
		>
			{/* All content sits above the wash */}
			<div className="relative z-10 flex flex-col items-center w-full">

			{/* Eyebrow */}
			<motion.div
				initial={{ opacity: 0, x: -12 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.45, ease: "easeOut" }}
				className="flex items-center gap-3 mb-14"
			>
				<motion.span
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
					style={{ originX: 0 }}
					className="block w-8 h-px bg-black/30"
				/>
				<span className="text-black/40 text-xs font-mono uppercase tracking-widest">
					Let's talk
				</span>
			</motion.div>

			{/* Headline */}
			<div className="flex flex-col text-center mb-16" style={{ gap: "0.04em" }}>
				{HEADLINE.map((line, i) => (
					<div key={i} className="overflow-hidden">
						<motion.h2
							initial={{ y: "110%" }}
							whileInView={{ y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.9,
								delay: 0.1 + i * 0.13,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="font-bold leading-[0.9] text-black"
							style={{ fontSize: "clamp(4rem, 9vw, 8.5rem)" }}
						>
							{line}
						</motion.h2>
					</div>
				))}
			</div>

			{/* Subtext */}
			<motion.p
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
				className="text-black/40 text-lg text-center max-w-md leading-relaxed mb-14"
			>
				Need photography, video, or a website that finally matches the experience? Tell us what you are shaping.
			</motion.p>

			{/* Interactive area — button → form → success */}
			<AnimatePresence mode="wait">

				{/* ── Idle: magnetic button ── */}
				{formState === "idle" && (
					<motion.div
						key="button"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.9 }}
						transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
						className="relative flex flex-col items-center gap-10"
					>
						<div className="relative flex items-center justify-center">
							<motion.div
								animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0, 0.15] }}
								transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
								className="absolute w-56 h-56 rounded-full border border-black/25 pointer-events-none"
							/>
							<motion.div
								animate={{ scale: [1, 1.18, 1], opacity: [0.1, 0, 0.1] }}
								transition={{ repeat: Infinity, duration: 2.8, delay: 0.4, ease: "easeInOut" }}
								className="absolute w-56 h-56 rounded-full border border-black/20 pointer-events-none"
							/>
							<MagneticButton onClick={() => setFormState("open")}>
								Get in touch
								<motion.span
									animate={{ x: [0, 4, 0] }}
									transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
								>
									→
								</motion.span>
							</MagneticButton>
						</div>

						<motion.a
							href="mailto:hello@sudocreate.studio"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							className="text-black/30 text-sm font-mono hover:text-black transition-colors duration-300"
						>
							hello@sudocreate.studio
						</motion.a>
					</motion.div>
				)}

				{/* ── Open: inquiry form ── */}
				{formState === "open" && (
					<motion.div
						key="form"
						initial={{ opacity: 0, y: 32, scale: 0.97 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -16, scale: 0.97 }}
						transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
						className="w-full max-w-xl"
					>
						<form
							onSubmit={handleSubmit}
							className="bg-neutral-950 rounded-3xl p-8 lg:p-10 flex flex-col gap-5"
						>
							{/* Form header */}
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.35 }}
								className="flex items-center justify-between mb-2"
							>
								<div>
									<h3 className="text-white font-bold text-xl">Start a project</h3>
									<p className="text-white/40 text-sm mt-0.5">I will follow up within one business day.</p>
								</div>
								<button
									type="button"
									onClick={() => setFormState("idle")}
									className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200 text-sm flex-shrink-0"
									aria-label="Close form"
								>
									×
								</button>
							</motion.div>

							{/* Name */}
							<Field index={0}>
								<label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5 font-mono">
									Name
								</label>
								<input
									type="text"
									required
									placeholder="Your name"
									value={formData.name}
									onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
									className={inputClass}
								/>
							</Field>

							{/* Email */}
							<Field index={1}>
								<label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5 font-mono">
									Email
								</label>
								<input
									type="email"
									required
									placeholder="your@email.com"
									value={formData.email}
									onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
									className={inputClass}
								/>
							</Field>

							{/* Project description */}
							<Field index={2}>
								<label className="block text-white/50 text-xs uppercase tracking-widest mb-1.5 font-mono">
									Project / Inquiry
								</label>
								<textarea
									required
									placeholder="Tell me what needs to be photographed, filmed, designed, or launched..."
									rows={4}
									value={formData.description}
									onChange={(e) => setFormData((p) => ({ ...p, description: e.target.value }))}
									className={`${inputClass} resize-none`}
								/>
							</Field>

							{/* Budget */}
							<Field index={3}>
								<label className="block text-white/50 text-xs uppercase tracking-widest mb-2.5 font-mono">
									Proposed Budget
								</label>
								<div className="flex flex-wrap gap-2">
									{BUDGET_OPTIONS.map((option) => (
										<motion.button
											key={option}
											type="button"
											whileTap={{ scale: 0.95 }}
											onClick={() => setBudget(option)}
											className={`text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
												budget === option
													? "bg-white text-black border-white"
													: "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
											}`}
										>
											{option}
										</motion.button>
									))}
								</div>
							</Field>

							{/* Submit */}
							<Field index={4}>
								<motion.button
									type="submit"
									disabled={submitting}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.97 }}
									className="w-full bg-white text-black font-semibold py-4 rounded-full text-sm mt-2 hover:bg-white/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
								>
									{submitting ? "Sending…" : "Send message →"}
								</motion.button>
							</Field>
						</form>
					</motion.div>
				)}

				{/* ── Submitted: success ── */}
				{formState === "submitted" && (
					<motion.div
						key="success"
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
						className="w-full max-w-xl bg-neutral-950 rounded-3xl p-12 flex flex-col items-center gap-5 text-center"
					>
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
							className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center text-2xl text-white"
						>
							✓
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.35, duration: 0.4 }}
						>
							<h3 className="text-white font-bold text-2xl mb-2">Message received.</h3>
							<p className="text-white/40 text-sm leading-relaxed">
								I will be in touch within one business day.
							</p>
						</motion.div>
					</motion.div>
				)}

			</AnimatePresence>

			</div>
		</section>
	);
};

export default CTASection;
