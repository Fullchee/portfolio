import Layout from "../components/layout";

const Uses = () => {
	return (
		<Layout title="Uses" description="What I use">
			<h1 className="h-12 mb-4">Uses</h1>
			<p>
				Check out <a href="https://uses.tech">uses.tech</a> for a list of
				everyone's <code>/uses</code> pages!
			</p>
			<h2 className="pb-0">Hardware</h2>
			<p>For work, I use a Macbook Pro 16"</p>

			<p>At home, I use a ThinkPad T500 series with Linux Mint</p>
			<h2 className="pb-4">Software</h2>
			<h3 className="p-0">Work</h3>
			<p>
				<a href="https://www.jetbrains.com/pycharm/">PyCharm</a> for Python work
			</p>
			<p>
				<a href="https://code.visualstudio.com/">VSCode</a> for everything else
			</p>
			<p>
				<strong>Terminal</strong>
			</p>
			<ul>
				<li>
					<a href="https://iterm2.com/">iTerm2</a>
				</li>
				<li>
					<a href="https://github.com/sorin-ionescu/prezto">Prezto</a> as my zsh
					framework
				</li>
				<li>
					<a href="https://github.com/agnoster/agnoster-zsh-theme">
						Agnoster theme
					</a>
				</li>
				<li>
					<a href="https://github.com/rupa/z">z.sh</a> to move around
				</li>
				<li>
					<a href="https://github.com/ggreer/the_silver_searcher">
						ag (the silver searcher)
					</a>{" "}
					to grep
				</li>
			</ul>
			<h3>Misc software</h3>
			<ul>
				<li>
					<a href="https://bitwarden.com/">BitWarden</a> as my main password
					manager
				</li>
				<li>
					<a href="chrome.com">Chrome</a> as my main browser
					<ul>
						<li>
							because <a href="firefox.com">Firefox</a> doesn&#39;t support{" "}
							<a href="https://support.freedom.to/en/articles/4582083-supported-browsers-for-website-exceptions-and-non-proxy-mode-on-mac">
								non-proxy mode on Mac
							</a>{" "}
							😢
						</li>
					</ul>
				</li>
				<li>
					<a href="https://freedom.to/">Freedom</a> to add structure to my day
					and prevent me from overworking
				</li>
				<li>
					<a href="https://karabiner-elements.pqrs.org/">Karabiner-Elements</a>{" "}
					to swap the <code>fn</code> and the <code>ctrl</code> keys and make{" "}
					<code>caps-lock</code> into a super button.
				</li>
				<li>
					<a href="https://macpassapp.org/">MacPass</a> to edit Keepass files
				</li>
				<li>
					<a href="https://monosnap.com/">Monosnap</a> for annotating
					screenshots
				</li>
				<li>
					<a href="https://rectangleapp.com/">Rectangle</a> for window
					management
				</li>
				<li>
					<a href="https://typora.io/">Typora</a> is the nicest WYSIWYG markdown
					editor I&#39;ve used
				</li>
			</ul>
		</Layout>
	);
};

export default Uses;
