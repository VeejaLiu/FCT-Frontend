import ICON_1v1_Close_Down from '../../assets/image/player-styles/25/1v1_Close_Down.png';
import ICON_1v1_Close_Down_ from '../../assets/image/player-styles/25/1v1_Close_Down_.png';
import ICON_Acrobatic from '../../assets/image/player-styles/25/Acrobatic.png';
import ICON_Acrobatic_ from '../../assets/image/player-styles/25/Acrobatic_.png';
import ICON_Aerial from '../../assets/image/player-styles/25/Aerial.png';
import ICON_Aerial_ from '../../assets/image/player-styles/25/Aerial_.png';
import ICON_Anticipate from '../../assets/image/player-styles/25/Anticipate.png';
import ICON_Anticipate_ from '../../assets/image/player-styles/25/Anticipate_.png';
import ICON_Block from '../../assets/image/player-styles/25/Block.png';
import ICON_Block_ from '../../assets/image/player-styles/25/Block_.png';
import ICON_Bruiser from '../../assets/image/player-styles/25/Bruiser.png';
import ICON_Bruiser_ from '../../assets/image/player-styles/25/Bruiser_.png';
import ICON_Chip_Shot from '../../assets/image/player-styles/25/Chip_Shot.png';
import ICON_Chip_Shot_ from '../../assets/image/player-styles/25/Chip_Shot_.png';
import ICON_Cross_Claimer from '../../assets/image/player-styles/25/Cross_Claimer.png';
import ICON_Cross_Claimer_ from '../../assets/image/player-styles/25/Cross_Claimer_.png';
import ICON_Dead_Ball from '../../assets/image/player-styles/25/Dead_Ball.png';
import ICON_Dead_Ball_ from '../../assets/image/player-styles/25/Dead_Ball_.png';
import ICON_Deflector_ from '../../assets/image/player-styles/25/Deflector_.png';
import ICON_Far_Reach_ from '../../assets/image/player-styles/25/Far_Reach_.png';
import ICON_Far_Throw from '../../assets/image/player-styles/25/Far_Throw.png';
import ICON_Far_Throw_ from '../../assets/image/player-styles/25/Far_Throw_.png';
import ICON_Finesse_Shot from '../../assets/image/player-styles/25/Finesse_Shot.png';
import ICON_Finesse_Shot_ from '../../assets/image/player-styles/25/Finesse_Shot_.png';
import ICON_First_Touch from '../../assets/image/player-styles/25/First_Touch.png';
import ICON_First_Touch_ from '../../assets/image/player-styles/25/First_Touch_.png';
import ICON_Flair from '../../assets/image/player-styles/25/Flair.png';
import ICON_Flair_ from '../../assets/image/player-styles/25/Flair_.png';
import ICON_Footwork from '../../assets/image/player-styles/25/Footwork.png';
import ICON_Footwork_ from '../../assets/image/player-styles/25/Footwork_.png';
import ICON_Incisive_Pass from '../../assets/image/player-styles/25/Incisive_Pass.png';
import ICON_Incisive_Pass_ from '../../assets/image/player-styles/25/Incisive_Pass_.png';
import ICON_Intercept from '../../assets/image/player-styles/25/Intercept.png';
import ICON_Intercept_ from '../../assets/image/player-styles/25/Intercept_.png';
import ICON_Jockey from '../../assets/image/player-styles/25/Jockey.png';
import ICON_Jockey_ from '../../assets/image/player-styles/25/Jockey_.png';
import ICON_Long_Ball_Pass from '../../assets/image/player-styles/25/Long_Ball_Pass.png';
import ICON_Long_Ball_Pass_ from '../../assets/image/player-styles/25/Long_Ball_Pass_.png';
import ICON_Long_Throw from '../../assets/image/player-styles/25/Long_Throw.png';
import ICON_Long_Throw_ from '../../assets/image/player-styles/25/Long_Throw_.png';
import ICON_Pinged_Pass from '../../assets/image/player-styles/25/Pinged_Pass.png';
import ICON_Pinged_Pass_ from '../../assets/image/player-styles/25/Pinged_Pass_.png';
import ICON_Power_Header from '../../assets/image/player-styles/25/Power_Header.png';
import ICON_Power_Header_ from '../../assets/image/player-styles/25/Power_Header_.png';
import ICON_Power_Shot from '../../assets/image/player-styles/25/Power_Shot.png';
import ICON_Power_Shot_ from '../../assets/image/player-styles/25/Power_Shot_.png';
import ICON_Press_Proven from '../../assets/image/player-styles/25/Press_Proven.png';
import ICON_Press_Proven_ from '../../assets/image/player-styles/25/Press_Proven_.png';
import ICON_Quick_Step_ from '../../assets/image/player-styles/25/Quick_Step_.png';
import ICON_Rapid from '../../assets/image/player-styles/25/Rapid.png';
import ICON_Rapid_ from '../../assets/image/player-styles/25/Rapid_.png';
import ICON_Relentless_ from '../../assets/image/player-styles/25/Relentless_.png';
import ICON_Slide_Tackle from '../../assets/image/player-styles/25/Slide_Tackle.png';
import ICON_Slide_Tackle_ from '../../assets/image/player-styles/25/Slide_Tackle_.png';
import ICON_Technical from '../../assets/image/player-styles/25/Technical.png';
import ICON_Technical_ from '../../assets/image/player-styles/25/Technical_.png';
import ICON_Tiki_Taka from '../../assets/image/player-styles/25/Tiki_Taka.png';
import ICON_Tiki_Taka_ from '../../assets/image/player-styles/25/Tiki_Taka_.png';
import ICON_Trickster from '../../assets/image/player-styles/25/Trickster.png';
import ICON_Trickster_ from '../../assets/image/player-styles/25/Trickster_.png';
import ICON_Trivela from '../../assets/image/player-styles/25/Trivela.png';
import ICON_Trivela_ from '../../assets/image/player-styles/25/Trivela_.png';
import ICON_Whipped_Pass from '../../assets/image/player-styles/25/Whipped_Pass.png';
import ICON_Whipped_Pass_ from '../../assets/image/player-styles/25/Whipped_Pass_.png';
import { Popover } from '@douyinfe/semi-ui';

const PlayStylesList: {
  [key: string]: {
    title?: string;
    icon?: any;
    description?: string;
  };
} = {
  '1v1_Close_Down': {
    title: '1v1 Close Down',
    icon: ICON_1v1_Close_Down,
    description:
      'A player who excels at closing down opponents in 1v1 situations.',
  },
  '1v1_Close_Down_': {
    title: '1v1 Close Down+',
    icon: ICON_1v1_Close_Down_,
  },
  Acrobatic: {
    title: 'Acrobatic',
    icon: ICON_Acrobatic,
  },
  Acrobatic_: {
    title: 'Acrobatic+',
    icon: ICON_Acrobatic_,
  },
  Aerial: {
    title: 'Aerial',
    icon: ICON_Aerial,
  },
  Aerial_: {
    title: 'Aerial+',
    icon: ICON_Aerial_,
  },
  Anticipate: {
    title: 'Anticipate',
    icon: ICON_Anticipate,
    description:
      'A player who is known for having a high success rate getting ball possession on tackles with a low fouling rate. Improved chances of standing tackle success and grants the ability to stop the ball directly at their feet when performing a standing tackle.',
  },
  Anticipate_: {
    title: 'Anticipate+',
    icon: ICON_Anticipate_,
    description:
      'A player who is known for having a high success rate getting ball possession on tackles with a low fouling rate. Significantly improved chances of standing tackle success and grants the ability to stop the ball directly at their feet when performing a standing tackle.',
  },
  Block: {
    title: 'Block',
    icon: ICON_Block,
  },
  Block_: {
    title: 'Block+',
    icon: ICON_Block_,
  },
  Bruiser: {
    title: 'Bruiser',
    icon: ICON_Bruiser,
    description:
      'A player who is known for winning possession by physical imposition. Greater strength when performing physical tackles.',
  },
  Bruiser_: {
    title: 'Bruiser+',
    icon: ICON_Bruiser_,
    description:
      'A player who is known for winning possession by physical imposition. Even greater strength when performing physical tackles.',
  },
  Chip_Shot: {
    title: 'Chip Shot',
    icon: ICON_Chip_Shot,
  },
  Chip_Shot_: {
    title: 'Chip Shot+',
    icon: ICON_Chip_Shot_,
  },
  Cross_Claimer: {
    title: 'Cross Claimer',
    icon: ICON_Cross_Claimer,
  },
  Cross_Claimer_: {
    title: 'Cross Claimer+',
    icon: ICON_Cross_Claimer_,
  },
  Dead_Ball: {
    title: 'Dead Ball',
    icon: ICON_Dead_Ball,
    description:
      'A player who is known for being a specialist at taking set pieces. Set pieces are delivered with increased speed, curve, and accuracy. Ball trajectory preview line is longer.',
  },
  Dead_Ball_: {
    title: 'Dead Ball+',
    icon: ICON_Dead_Ball_,
    description:
      'A player who is known for being a specialist at taking set pieces. Set pieces are delivered with exceptional speed, curve, and accuracy. Ball trajectory preview line is at maximum length.',
  },
  Deflector_: {
    title: 'Deflector+',
    icon: ICON_Deflector_,
  },
  Far_Reach_: {
    title: 'Far Reach+',
    icon: ICON_Far_Reach_,
  },
  Far_Throw: {
    title: 'Far Throw',
    icon: ICON_Far_Throw,
  },
  Far_Throw_: {
    title: 'Far Throw+',
    icon: ICON_Far_Throw_,
  },
  Finesse_Shot: {
    title: 'Finesse Shot',
    icon: ICON_Finesse_Shot,
  },
  Finesse_Shot_: {
    title: 'Finesse Shot+',
    icon: ICON_Finesse_Shot_,
  },
  First_Touch: {
    title: 'First Touch',
    icon: ICON_First_Touch,
  },
  First_Touch_: {
    title: 'First Touch+',
    icon: ICON_First_Touch_,
  },
  Flair: {
    title: 'Flair',
    icon: ICON_Flair,
  },
  Flair_: {
    title: 'Flair+',
    icon: ICON_Flair_,
  },
  Footwork: {
    title: 'Footwork',
    icon: ICON_Footwork,
  },
  Footwork_: {
    title: 'Footwork+',
    icon: ICON_Footwork_,
  },
  Incisive_Pass: {
    title: 'Incisive Pass',
    icon: ICON_Incisive_Pass,
  },
  Incisive_Pass_: {
    title: 'Incisive Pass+',
    icon: ICON_Incisive_Pass_,
  },
  Intercept: {
    title: 'Intercept',
    icon: ICON_Intercept,
  },
  Intercept_: {
    title: 'Intercept+',
    icon: ICON_Intercept_,
  },
  Jockey: {
    title: 'Jockey',
    icon: ICON_Jockey,
  },
  Jockey_: {
    title: 'Jockey+',
    icon: ICON_Jockey_,
  },
  Long_Ball_Pass: {
    title: 'Long Ball Pass',
    icon: ICON_Long_Ball_Pass,
  },
  Long_Ball_Pass_: {
    title: 'Long Ball Pass+',
    icon: ICON_Long_Ball_Pass_,
  },
  Long_Throw: {
    title: 'Long Throw',
    icon: ICON_Long_Throw,
  },
  Long_Throw_: {
    title: 'Long Throw+',
    icon: ICON_Long_Throw_,
  },
  Pinged_Pass: {
    title: 'Pinged Pass',
    icon: ICON_Pinged_Pass,
    description:
      'A player who is known for making high speed ground passes. Passes travel faster along the ground without impacting the trapping difficulty of the receiver.',
  },
  Pinged_Pass_: {
    title: 'Pinged Pass+',
    icon: ICON_Pinged_Pass_,
    description:
      'A player who is known for making high speed ground passes. Passes travel much faster along the ground without impacting the trapping difficulty of the receiver.',
  },
  Power_Header: {
    title: 'Power Header',
    icon: ICON_Power_Header,
  },
  Power_Header_: {
    title: 'Power Header+',
    icon: ICON_Power_Header_,
  },
  Power_Shot: {
    title: 'Power Shot',
    icon: ICON_Power_Shot,
    description:
      'A player who is known for taking powerful shots from outside the box. Performs power shots faster and with increased speed.',
  },
  Power_Shot_: {
    title: 'Power Shot+',
    icon: ICON_Power_Shot_,
    description:
      'A player who is known for taking powerful shots from outside the box. Performs power shots much faster and with a significant increase in speed.',
  },
  Press_Proven: {
    title: 'Press Proven',
    icon: ICON_Press_Proven,
  },
  Press_Proven_: {
    title: 'Press Proven+',
    icon: ICON_Press_Proven_,
  },
  Quick_Step_: {
    title: 'Quick Step+',
    icon: ICON_Quick_Step_,
  },
  Rapid: {
    title: 'Rapid',
    icon: ICON_Rapid,
  },
  Rapid_: {
    title: 'Rapid+',
    icon: ICON_Rapid_,
  },
  Relentless_: {
    title: 'Relentless+',
    icon: ICON_Relentless_,
  },
  Slide_Tackle: {
    title: 'Slide Tackle',
    icon: ICON_Slide_Tackle,
  },
  Slide_Tackle_: {
    title: 'Slide Tackle+',
    icon: ICON_Slide_Tackle_,
  },
  Technical: {
    title: 'Technical',
    icon: ICON_Technical,
  },
  Technical_: {
    title: 'Technical+',
    icon: ICON_Technical_,
  },
  Tiki_Taka: {
    title: 'Tiki Taka',
    icon: ICON_Tiki_Taka,
  },
  Tiki_Taka_: {
    title: 'Tiki Taka+',
    icon: ICON_Tiki_Taka_,
  },
  Trickster: {
    title: 'Trickster',
    icon: ICON_Trickster,
  },
  Trickster_: {
    title: 'Trickster+',
    icon: ICON_Trickster_,
  },
  Trivela: {
    title: 'Trivela',
    icon: ICON_Trivela,
  },
  Trivela_: {
    title: 'Trivela+',
    icon: ICON_Trivela_,
  },
  Whipped_Pass: {
    title: 'Whipped Pass',
    icon: ICON_Whipped_Pass,
  },
  Whipped_Pass_: {
    title: 'Whipped Pass+',
    icon: ICON_Whipped_Pass_,
  },
};

export const PlayStylesComponent = ({ playStyle }: { playStyle: string }) => {
  return (
    <div className="inline-block h-10 w-10 m-1">
      <Popover
        className="w-80 p-2 rounded-xl"
        position={'topLeft'}
        content={
          <>
            <div className="text-lg font-bold mb-1">
              {PlayStylesList[playStyle].title}
            </div>
            <div className="text-sm">
              {PlayStylesList[playStyle].description}
            </div>
          </>
        }
      >
        {/*<div>{PlayStylesList[playStyle].title}</div>*/}
        <img
          className="h-10 w-10"
          src={PlayStylesList[playStyle].icon}
          alt=""
        />
      </Popover>
    </div>
  );
};
