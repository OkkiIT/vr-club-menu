// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgrounds: {
      activityBackgroundInverted: string;
      activityBackGround: string;
      header:string;
    };
    fontColor:{
      activity: string
      header:string
    }
  }
}
