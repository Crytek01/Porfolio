import { createContext, FunctionComponent, useContext, useState } from 'react';
import { works as worksStub } from './stub/works';

export interface IImage {
  basic: {
    type: string;
    source: string;
  };
  optimized: {
    type: string;
    source: string;
  };
}

export interface IWork {
  slug: string;
  title: string;
  logoImage: IImage;
  previewImage: IImage[];
  description: string;
  information: string;
  githubUrl: string;
  technologyStack: string[];
  platform: string;
  details: string;
}

interface IWorksContext {
  findWork: (slug?: string) => IWork | undefined;
  works: IWork[];
}

const WorksContext = createContext<IWorksContext | undefined>(undefined);

interface IWorksContextProvider {
  children: React.ReactNode;
}

export const WorksContextProvider: FunctionComponent<IWorksContextProvider> = ({
  children,
}) => {
  const [works] = useState<IWork[]>(worksStub);

  const contextValue: IWorksContext = {
    findWork: (slug?: string) =>
      slug ? works.find((work) => work.slug === slug) : undefined,
    works,
  };

  return (
    <WorksContext.Provider value={contextValue}>
      {children}
    </WorksContext.Provider>
  );
};

export const useWorksService = () => {
  const context = useContext(WorksContext);

  if (!context) {
    throw Error('useWorksService must be used within WorksContextProvider');
  }

  return context;
};
