const Topbar = () => {
    return <>
        <div className="flex justify-between items-center bg-[#211121] text-white px-16 h-12">
					<div className="flex">
						<div className="mr-10">
							<span>icon</span>
							<span>contact@comparoshop.com</span>
						</div>

						<div>
							<span>icon</span>
							<span>00237 6 XX XX XX</span>
						</div>
					</div>

					<div className="flex">
						<div className="mr-5">
							<span>f</span>
							<span>in</span>
							<span>tw</span>
						</div>
						<div>
							<select>
								<option>Francais</option>
								<option>Anglais</option>
								<option>Arabe</option>
							</select>
						</div>
					</div>
				</div>
    </>
}

export default Topbar;