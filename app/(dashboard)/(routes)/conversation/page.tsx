import Heading from '@/components/Heading';
import { MessageSquare } from 'lucide-react';

const ConversationPage = () => {
  return (
    <div>
      <Heading
        title='Conversation'
        description='Chat with an advanced AI ChatBot!'
        icon={MessageSquare}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/20'
      />
    </div>
  );
};

export default ConversationPage;
