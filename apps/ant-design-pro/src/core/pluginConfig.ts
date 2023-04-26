import z from 'zod';
import { IConfigFromPluginsJoi } from './pluginConfigJoi.d';

const IConfig = z.object({});

type IConfigTypes = z.infer<typeof IConfig>;

export type IConfigFromPlugins = IConfigFromPluginsJoi & Partial<IConfigTypes>;
