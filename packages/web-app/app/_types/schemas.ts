import { z } from 'zod';

export const grantSchema = z.object({
  owner: z.string(),
  grantee: z.string(),
  dataId: z.string(),
  lockedUntil: z.bigint(),
});

export const grantsSchema = z.array(grantSchema);

export const addressesListSchema = z.array(z.string());
