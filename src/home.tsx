import * as React from 'react';
import { lazyLoad } from './lazyLoad';
import { NotWorkingProps } from './notWorking';
import { WorkingProps } from './working';

//comment one or the other myButton to see it in action
const MyButton = lazyLoad<WorkingProps>({ load: () => import('./working') });

//webpack will compile, but you'll see an error "Property 'classes' is missing in type { text: string; }"
//const MyButton = lazyLoad<NotWorkingProps>({load: ()=> import('./notWorking')});

class Home extends React.Component<any, any> {

    render() {
        return <MyButton text="hello" />;
    }

}

export default Home;