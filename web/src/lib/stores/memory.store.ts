import type { MemoryResponseDto } from '@immich/sdk';
import { writable } from 'svelte/store';

export const memoryStore = writable<MemoryResponseDto[]>();
