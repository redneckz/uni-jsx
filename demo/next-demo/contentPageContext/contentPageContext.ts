import { ContentPageContext } from '@demo/ui-kit';
import { useAsyncData } from './useAsyncData';
import { useState } from './useState';

export const contentPageContext: ContentPageContext = {
  useState: useState,
  useAsyncData
};
