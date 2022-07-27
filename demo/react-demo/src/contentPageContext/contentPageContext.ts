import { ContentPageContext } from '@demo/ui-kit';
import { useState } from './useState';
import { useAsyncData } from './useAsyncData';

export const contentPageContext: ContentPageContext = {
  useState,
  useAsyncData
};
