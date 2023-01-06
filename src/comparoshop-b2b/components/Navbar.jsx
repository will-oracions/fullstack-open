import * as styles from '../utils/tailwind.styles';


const Navbar = () => {
    return <>
			<div className="px-16 flex justify-between items-center h-20 shadow-md">
					<div>
						Logo Comparoshop
						{/* <img src={logo} alt="comparoshop logo" /> */}
					</div>

					<nav className="flex items-center text-sm">
						<ul className="flex mr-4">
							<li className="mr-2">Technologies</li>
							<li className="mr-2">Partenaires</li>
							<li className="mr-2">Temoignages</li>
							<li className="mr-2">A propos</li>
							<li className="mr-2">Contacts</li>
						</ul>

						<button className={styles.btnOutlineRounded}>Se connecter</button>
					</nav>
				</div>
    </>
}

export default Navbar;