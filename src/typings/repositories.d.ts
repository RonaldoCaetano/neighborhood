interface Repository {
  clone_url: string;
  created_at: string;
  description: string | null;
  disabled: boolean;
  downloads_url: string;
  events_url: string;
  full_name: string;
  git_url: string;
  homepage: string | null;
  id: number;
  language: string;
  languages_url: string;
  name: string;
  owner: RepositoryOwner;
  private: false;
  pushed_at: string;
  size: number;
  ssh_url: string;
  updated_at: string;
  url: string;
}

interface RepositoryOwner {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

interface RepositoryProps {
  repositoryData: Repository;
}

interface SendFormProps {
  loading: boolean;
  setUserName: (param: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
