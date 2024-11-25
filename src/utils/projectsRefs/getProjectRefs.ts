import { projects } from '../../data/Projects/projects';

export function getProjectRefs(projectName: string) {
	const project = projects.find((p) => p.name === projectName);

	if (!project) {
		throw new Error(`Project with name "${projectName}" not found`);
	}

	return project.refs;
}
