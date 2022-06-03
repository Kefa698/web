import React from 'react';
import { transition } from '@headlessui/react'; //smooth transition
import { Link } from 'react-scroll'; ///smooth  scroll through page

function Navbar() {
	return (
		<div>
			<nav className="fixed z-20 bg-white w-full">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center sm:mx-10 md:mx-20 justify-between w-full">
							{/* for logo */}
							<div className="flex justify-center items-center flex-shrink-0">
								<h1 className="font-bold text-xl cursor-pointer"></h1>
								stream<span className="text-blue-700">line</span>
							</div>
							{/* this is for links */}
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
										activeClass="Home"
										to="home"
										smooth={true}
										offset={50}
										className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md"
									>
										Home
									</Link>
									<Link
										activeClass="Services"
										to="services"
										smooth={true}
										offset={50}
										className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md"
									>
										Services
									</Link>
									<Link
										activeClass="Work"
										to="work"
										smooth={true}
										offset={50}
										className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md"
									>
										Projects
									</Link>
									<Link
										activeClass="Clients"
										to="clients"
										smooth={true}
										offset={50}
										className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md"
									>
										Clients
									</Link>

									<Link
										activeClass="Contact"
										to="contact"
										smooth={true}
										offset={50}
										className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md"
									>
										Contact
									</Link>
								</div>
							</div>
							{/* contact section */}

							<div className="flex justify-center items-center flex-shrink-0">
								<h1 className="font-semibold text-lg cursor-pointer hidden md:block">
									say <span className="text-blue-600">hi</span>
								</h1>
							</div>
						</div>
                        {/* mobile responsiveness */}
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
