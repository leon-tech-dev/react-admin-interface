import { useMemo } from 'react';
import { useNavigate, To, NavigateFunction } from 'react-router-dom';
interface Router {
  back: () => void;
  forward: () => void;
  reload: () => void;
  push: (href: To) => void;
  replace: (href: To) => void;
}

export function useRouter(): Router {
  const navigate: NavigateFunction = useNavigate();

  const router = useMemo(
    () => ({
      back: () => navigate(-1),
      forward: () => navigate(1),
      reload: () => window.location.reload(),
      push: (href: To) => navigate(href),
      replace: (href: To) => navigate(href, { replace: true }),
    }),
    [navigate]
  );

  return router;
}
