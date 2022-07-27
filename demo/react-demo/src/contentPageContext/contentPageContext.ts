import type { ContentPageContext } from '@demo/ui-kit';
import { useState } from './useState';
import { useAsyncData } from './useAsyncData';
import { useRouter } from './useRouter';

export const contentPageContext: ContentPageContext = {
  useState,
  useAsyncData,
  useRouter
};
