const Urls = ({ title, links }) => {
	return (
		<div>
			<p className="font-medium uppercase text-base text-[#818181] mb-2">
				{title}
			</p>
			<ul className="flex flex-col">
				{links.map((link, index) => (
					<li
						className="font-medium uppercase text-base text-black text-base leading-[32px]"
						key={index}
					>
						<a href={link.url} className="hover:text-[#818181] transition-colors duration-300 cursor-pointer">{link.title}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Urls;
