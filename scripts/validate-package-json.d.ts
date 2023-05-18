interface PackageJson {
	name: string;
	version: string;
	description?: string;
	keywords?: string[];
	homepage?: string;
	bugs?: Bugs;
	license?: string;
	author?: string | AuthorOrContributor;
	contributors?: string[] | AuthorOrContributor[];
	files?: string[];
	main?: string;
	browser?: string;
	types?: string;
	bin?: string | Bin;
	man?: string | string[];
	directories?: Directories;
	repository?: Repository;
	scripts?: Record<string, string>;
	dependencies?: Record<string, string>;
	devDependencies?: Record<string, string>;
	peerDependencies?: Record<string, string>;
	optionalDependencies?: Record<string, string>;
	engines?: Engines;
	os?: string[];
	cpu?: string[];
	private?: boolean;
	publishConfig?: PublishConfig;
	workspaces?: string[] | Workspace;
}
interface Engines {
    node?: string;
    npm?: string;
}
interface Workspace {
	packages?: string[];
	[workspaceName: string]: unknown;
}
interface PublishConfig {
	access?: 'public' | 'restricted';
	registry?: string;
	[configName: string]: unknown;
}
interface Bugs {
	url: string;
	email?: string;
}
interface AuthorOrContributor {
	name: string;
	email?: string;
	url?: string;
}
interface Bin {
	[commandName: string]: string;
}
interface Repository {
	type: string;
	url: string;
}
interface Directories {
	lib?: string;
	bin?: string;
	man?: string;
	doc?: string;
	example?: string;
}
declare const json: PackageJson;
