import React, { useEffect, useRef, useState } from "react";

const Navigation = () => {
	const [isPill, setIsPill] = useState(false);
	const [isExpanded, setIsExpanded] = useState(true);
	const lastScrollY = useRef(0);
	const heroRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		// Find hero section (first section or element with hero id)
		heroRef.current =
			document.querySelector("section:first-of-type") ||
			document.getElementById("hero") ||
			document.querySelector("[data-hero]") ||
			(document.body.firstElementChild as HTMLElement);

		if (!heroRef.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				// When hero is NOT intersecting (scrolled past), shrink to pill
				if (!entry.isIntersecting) {
					setIsPill(true);
					setIsExpanded(false);
				} else {
					// When hero is visible, expand
					setIsPill(false);
					setIsExpanded(true);
				}
			},
			{ threshold: 0.1 },
		);

		observer.observe(heroRef.current);

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// If expanded (clicked while in pill mode) and user scrolls, shrink back to pill
			if (isExpanded && isPill && currentScrollY !== lastScrollY.current) {
				setIsExpanded(false);
			}

			lastScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isExpanded, isPill]);

	const handleClick = () => {
		// If in pill mode, expand when clicked
		if (isPill && !isExpanded) {
			setIsExpanded(true);
		}
	};

	const handleAgentModuleClick = () => {
		const agent = document.getElementById("agent-module");
		if (agent) {
			agent.showModal();
		}
	};

	return (
		<nav
			onClick={handleClick}
			className={`
				text-sm fixed bottom-4 left-0 right-0 mx-auto z-50
				bg-white/10 text-white backdrop-blur-sm
				transition-all duration-500 ease-in-out cursor-pointer
				${
					isPill && !isExpanded
						? "w-fit px-6 py-3 rounded-full scale-90 hover:scale-100"
						: "max-w-3xl p-5 rounded-2xl"
				}
			`}
		>
			{(!isPill || isExpanded) && (
				<div className="flex items-center justify-between">
					<ul className="flex gap-5">
						<li className="hover:bg-pitch-black hover:text-white p-2 min-w-20 transition-all ease-in-out">
							<a href="/">what we've built</a>
						</li>
						<li className="hover:bg-pitch-black hover:text-white p-2 transition-all ease-in-out min-w-20">
							<a href="/about">things we're building</a>
						</li>
						<li className="hover:bg-pitch-black hover:text-white p-2 transition-all ease-in-out min-w-20">
							<a href="/about">client stories</a>
						</li>
						<li className="hover:bg-pitch-black hover:text-white p-2 transition-all ease-in-out min-w-20">
							<button onClick={handleAgentModuleClick}>ask our agent</button>
						</li>
					</ul>
					<a
						href="/contact"
						className="hover:bg-coral-glow hover:text-white p-2 transition-all ease-in-out min-w-20"
						onClick={(e) => e.stopPropagation()}
					>
						schedule a call
					</a>
				</div>
			)}
			{isPill && !isExpanded && (
				<div className="flex items-center justify-center">
					<span>click here. see stuff.</span>
				</div>
			)}
		</nav>
	);
};

export default Navigation;
