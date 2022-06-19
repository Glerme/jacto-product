import { Languages } from './Languages';

export interface File {
  created_at: string;
  file: {
    en_GB: FileDownload;
    en_US: FileDownload;
    es_AR: FileDownload;
    es_ES: FileDownload;
    fr_FR: FileDownload;
    pt_BR: FileDownload;
    ru_RU: FileDownload;
    th_TH: FileDownload;
  };
  id: number;
  name: Languages;
  updated_at: string;
}

interface FileDownload {
  name: string;
  size: number;
  type: string;
  url: string;
}
