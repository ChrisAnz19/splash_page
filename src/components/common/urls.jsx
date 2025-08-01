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
						<a href={link.url}>{link.title}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Urls;
