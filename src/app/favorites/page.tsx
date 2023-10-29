import {
	SiDotnet,
	SiGithub,
	SiLastdotfm,
	SiReact,
	SiWindows11
} from "@icons-pack/react-simple-icons";
import type { FC } from "react";

import { Content } from "@/components/Content";
import { Main } from "@/components/Main";

const ProjectPage: FC = () => (
	<Main>
		<Content Header="favorites">
			<ul style={{ listStyle: "none" }}>
				<li>
					<SiDotnet />
				</li>
				<li>
					<SiGithub />
				</li>
				<li>
					<SiReact />
				</li>
				<li>
					<SiLastdotfm />
				</li>
				<li>
					<SiWindows11 />
				</li>
			</ul>
		</Content>
	</Main>
);

export default ProjectPage;
