import type { ContentPageContext } from '@demo/ui-kit';
import { useAsyncData } from './useAsyncData';
import { useRouter } from './useRouter';
import { useState } from './useState';

export const contentPageContext: ContentPageContext = {
  useState: useState,
  useAsyncData,
  useRouter
};
