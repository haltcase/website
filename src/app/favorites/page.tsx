import * as icons from "@icons-pack/react-simple-icons";
import { FC } from "react";

import Content from "@/components/Content";
import Main from "@/components/Main";

const ProjectPage: FC = () => (
	<Main>
		<Content Header="favorites">
			<ul style={{ listStyle: "none" }}>
				<li>
					<icons.Dotnet />
				</li>
				<li>
					<icons.Github />
				</li>
				<li>
					<icons.ReactJs />
				</li>
				<li>
					<icons.Lastdotfm />
				</li>
				<li>
					<icons.Windows />
				</li>
			</ul>
		</Content>
	</Main>
);

export default ProjectPage;
