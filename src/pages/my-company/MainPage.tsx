import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

function MainPage() {
  return (
    <div>
      메인페이지
      <Button
        onClick={() => {
          toast('hlloe', {
            position: 'top-center',
          });
        }}
      >
        안녕
      </Button>
    </div>
  );
}

export default MainPage;
