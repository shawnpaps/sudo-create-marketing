import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

type NavItem = { label: string; href: string };

const DesktopNavigation = ({ items }: { items: NavItem[] }) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className="w-full h-full flex items-center justify-center">
			<div className="relative flex items-center justify-center">
				<AnimatePresence>
					{expanded && (
						<motion.ul
							key="nav"
							initial={{ width: 0, opacity: 0 }}
							animate={{ width: "auto", opacity: 1 }}
							exit={{ width: 0, opacity: 0 }}
							transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
							className="overflow-hidden backdrop-blur-lg rounded-full flex items-center pr-4"
						>
							{items.map((item) => (
								<li
									key={item.href}
									className="list-none text-sm whitespace-nowrap flex items-center hover:bg-white hover:text-black px-4 py-2 rounded-full transition-all duration-300"
								>
									<a href={item.href}>{item.label}</a>
								</li>
							))}
						</motion.ul>
					)}
				</AnimatePresence>

				<div className="flex items-center bg-black/60 backdrop-blur-md border border-white/10 rounded-full shrink-0 z-10 overflow-hidden">
					<a
						href="https://instagram.com/sudo.create"
						target="_blank"
						rel="noopener noreferrer"
						className="h-8 w-9 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
						aria-label="Instagram"
					>
						<FaInstagram size={15} />
					</a>
					<div className="w-px h-4 bg-white/20" />
					<a
						href="https://www.facebook.com/sudocreatetampa"
						target="_blank"
						rel="noopener noreferrer"
						className="h-8 w-9 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
						aria-label="Facebook"
					>
						<FaFacebook size={15} />
					</a>
					<div className="w-px h-4 bg-white/20" />
					<a
						href="/"
						className="h-8 px-4 flex items-center justify-center hover:bg-white transition-all duration-300 group"
						aria-label="Home"
					>
						<img
							src="/sudo_white.png"
							alt="Sudo Create"
							className="h-4 w-auto group-hover:invert transition-all duration-300"
						/>
					</a>
					<div className="w-px h-4 bg-white/20" />
					<button
						className="h-8 w-10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
						onClick={() => setExpanded(!expanded)}
						aria-label="Toggle navigation"
					>
						<motion.span
							animate={{ rotate: expanded ? 45 : 0 }}
							transition={{ duration: 0.3 }}
							className="text-xl leading-none"
						>
							+
						</motion.span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default DesktopNavigation;
