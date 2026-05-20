import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

type NavItem = { label: string; href: string };

const MobileNavigation = ({ items }: { items: NavItem[] }) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white"
				onClick={() => setOpen(true)}
				aria-label="Open navigation"
			>
				<motion.span
					animate={{ rotate: open ? 45 : 0 }}
					transition={{ duration: 0.3 }}
					className="text-2xl leading-none"
				>
					+
				</motion.span>
			</button>

			<AnimatePresence>
				{open && (
					<>
						<motion.div
							key="backdrop"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
							onClick={() => setOpen(false)}
						/>

						<motion.div
							key="drawer"
							initial={{ y: "100%" }}
							animate={{ y: 0 }}
							exit={{ y: "100%" }}
							transition={{ type: "spring", damping: 32, stiffness: 320 }}
							drag="y"
							dragConstraints={{ top: 0 }}
							dragElastic={0.15}
							onDragEnd={(_, info) => {
								if (info.offset.y > 80) setOpen(false);
							}}
							className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-black/80 backdrop-blur-xl px-6 pt-4 pb-12"
						>
							<div className="w-10 h-1 rounded-full bg-white/30 mx-auto mb-8" />

							<img
								src="/sudo_white.png"
								alt="Sudo Create"
								className="h-6 w-auto mb-8 px-4"
							/>

							<nav>
								<ul className="space-y-1">
									{items.map((item) => (
										<li key={item.href}>
											<a
												href={item.href}
												onClick={() => setOpen(false)}
												className="flex items-center py-4 px-4 text-white text-lg rounded-2xl hover:bg-white/10 transition-all duration-200"
											>
												{item.label}
											</a>
										</li>
									))}
								</ul>
							</nav>

							<div className="flex items-center gap-3 mt-8 px-4">
								<a
									href="https://instagram.com/sudo.create"
									target="_blank"
									rel="noopener noreferrer"
									className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200"
									aria-label="Instagram"
								>
									<FaInstagram size={18} />
								</a>
								<a
									href="https://www.facebook.com/sudocreatetampa"
									target="_blank"
									rel="noopener noreferrer"
									className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200"
									aria-label="Facebook"
								>
									<FaFacebook size={18} />
								</a>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default MobileNavigation;
