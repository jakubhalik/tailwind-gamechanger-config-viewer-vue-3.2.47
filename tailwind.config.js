/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    /*
    hover:
    focus:
    focus-within:
    focus-visible:
    active:
    visited:
    target:
    first:
    last:
    only:
    odd:
    even:
    first-of-type:
    last-of-type:
    only-of-type:
    empty:
    disabled:
    enabled:
    checked:
    indeterminate:
    default:
    required:
    valid:
    invalid:
    in-range:
    out-of-range:
    placeholder-shown:
    autofill:
    read-only:
    before:
    after:
    fist-letter:
    first-line:
    marker:
    selection:
    file:
    backdrop:
    placeholder:
    min-[]:
    max-sm:
    max-md:
    max-lg:
    max-2xl:
    max-[]:
    dark:
    portrait:
    landscape:
    motion-safe:
    motion-reduce:
    contrast-more:
    contrast-less:
    print:
    supports-[]:
    aria-checked:
    aria-disabled:
    aria-expanded:
    aria-hidden:
    aria-pressed:
    aria-readonly:
    aria-required:
    aria-selected:
    aria-[]:
    data-[]:
    rtl:
    ltr:
    open:
    */
    screens: {
      '20xs': '28px',
      '19xs': '56px',
      '18xs': '84px',
      '17xs': '112px',
      '16xs': '140px',
      '15xs': '168px',
      '14xs': '196px',
      '13xs': '224px',
      '12xs': '252px',
      '11xs': '280px',
      '10xs': '308px',
      '9xs': '336px',
      '8xs': '364px',
      '7xs': '392px',
      '6xs': '420px',
      '5xs': '448px',
      '4xs': '476px',
      '3xs': '504px',
      '2xs': '532px',
      xs: '560px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
      '5xl': '3200px',
      '6xl': '3840px',
      '7xl': '4480px',
      '8xl': '5120px',
      '9xl': '5760px',
      '10xl': '6400px',
      '11xl': '7040px',
      '12xl': '7680px',
      '13xl': '8320px',
      '14xl': '8960px',
      '15xl': '9600px',
      '16xl': '10240px',
      '17xl': '10880px',
      '18xl': '11520px',
      '19xl': '12160px',
      '20xl': '12800px',
      'jiophone2': '240px', 
      'galaxyfold': '280px', 
      'iphone4': '320px',
      'iphone5': '320px',   // iPhone 5/SE
      'iphone5se': '320px',
      'lumia520': '320px', 
      'iphonese': '320px', 
      'nokian9': '360px',
      'galaxys3': '360px',
      'galaxys5': '360px', 
      'galaxys8': '360px', 
      'galaxynote2': '360px', 
      'galaxynote3': '360px', 
      'lumia950': '360px', 
      'motog4': '360px',
      'nexus5': '360px', 
      'blackberryz30': '360px', 
      'iphone678': '375px', 
      'iphonex': '375px',
      'iphone678': '375px', // iPhone 6/7/8
      'iphonex': '375px', // iPhone X 
      'iphone12pro': '390px',
      'pixel5': '393px', 
      'nexus4': '384px', 
      'lgoptimusl70': '384px', 
      'iphone678plus': '414px',
      'iphonexr': '414px',
      'pixel2': '411px', 
      'pixel2xl': '411px', 
      'pixel3xl': '411px',
      'pixel4': '411px',
      'galaxys9plus': '412px', 
      'galaxys8plus': '412px',
      'galaxys20ultra': '412px', 
      'galaxya51': '412px',
      'nexus5x': '412px', 
      'nexus6': '412px', 
      'nexus6p': '412px',
      'iphone678plus': '414px', // iPhone 6/7/8 Plus
      'surface-duo': '540px',
      'nexus7': '600px',
      'blackberryplaybook': '600px',
      'lumia550': '640px', 
      'motogpower': '720px', 
      'nesthub': '720px', 
      'ipad': '768px', 
      'ipadmini': '768px', 
      'nexus10': '800px',
      'galaxytabs4': '800px', 
      'kindlefirehdx': '800px',
      'ipadpro': '1024px', 
      'surfacepro7': '1024px', 
      'nesthubmax': '1280px', 
      'laptop-mdpi': '1280px',
      'hd': '1366px', // HD desktop
      'laptop-hdpi': '1440px',
      'fhd': '1920px', // Full HD desktop
      'qhd': '2560px', // Quad HD desktop
      '4k': '3840px', // 4K desktop
    },
    // aspect
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      portrait: '2 / 3',
      portrait2: '3 / 4',
      portrait3: '4 / 5',
      portrait4: '9 / 16',
      landscape: '3 / 2',
      landscape2: '4 / 3',
      landscape3: '5 / 3',
      video: '16 / 9',
      ultrawide: '21 / 9',
      ultrawide2: '32 / 9',
      ultrawide3: '48 / 9',
      cinemaScope: '2.35 / 1',
      goldenRatio: '1.618 / 1',
      silverRatio: '1.414 / 1',
      creditCard: '3.375 / 2.125',
    },
    container: {},
    columns: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
      17: '17',
      18: '18',
      19: '19',
      20: '20',
      21: '21',
      22: '22',
      23: '23',
      24: '24',
      25: '25',
      26: '26',
      27: '27',
      28: '28',
      29: '29',
      30: '30',
      31: '31',
      32: '32',
      33: '33',
      34: '34',
      35: '35',
      36: '36',
      37: '37',
      38: '38',
      39: '39',
      40: '40',
      41: '41',
      42: '42',
      43: '43',
      44: '44',
      45: '45',
      46: '46',
      47: '47',
      48: '48',
      49: '49',
      50: '50',
      51: '51',
      52: '52',
      53: '53',
      54: '54',
      55: '55',
      56: '56',
      57: '57',
      58: '58',
      59: '59',
      60: '60',
      61: '61',
      62: '62',
      63: '63',
      64: '64',
      65: '65',
      66: '66',
      67: '67',
      68: '68',
      69: '69',
      70: '70',
      71: '71',
      72: '72',
      73: '73',
      74: '74',
      75: '75',
      76: '76',
      77: '77',
      78: '78',
      79: '79',
      80: '80',
      81: '81',
      82: '82',
      83: '83',
      84: '84',
      85: '85',
      86: '86',
      87: '87',
      88: '88',
      89: '89',
      90: '90',
      91: '91',
      92: '92',
      93: '93',
      94: '94',
      95: '95',
      96: '96',
      97: '97',
      98: '98',
      99: '99',
      100: '100',
      '10xs': '2rem',   /* 32px */
      '9xs': '4rem',    /* 64px */
      '8xs': '6rem',    /* 96px */
      '7xs': '8rem',    /* 128px */
      '6xs': '10rem',   /* 160px */
      '5xs': '12rem',   /* 192px */
      '4xs': '14rem',   /* 224px */
      '3xs': '16rem',   /* 256px */
      '2xs': '18rem',   /* 288px */
      'xs': '20rem',    /* 320px */
      'sm': '24rem',    /* 384px */
      'md': '28rem',    /* 448px */
      'lg': '32rem',    /* 512px */
      'xl': '36rem',    /* 576px */
      '2xl': '42rem',   /* 672px */
      '3xl': '48rem',   /* 768px */
      '4xl': '56rem',   /* 896px */
      '5xl': '64rem',   /* 1024px */
      '6xl': '72rem',   /* 1152px */
      '7xl': '80rem',   /* 1280px */
      '8xl': '88rem',   /* 1408px */
      '9xl': '96rem',   /* 1536px */
      '10xl': '104rem', /* 1664px */
      '11xl': '112rem', /* 1792px */
      '12xl': '120rem', /* 1920px */
      '13xl': '128rem', /* 2048px */
      '14xl': '136rem', /* 2176px */
      '15xl': '144rem', /* 2304px */
      '16xl': '152rem', /* 2432px */
      '17xl': '160rem', /* 2560px */
      '18xl': '168rem', /* 2688px */
      '19xl': '176rem', /* 2816px */
      '20xl': '184rem', /* 2944px */
      '1r': '1rem',    /* 16px */
      '1r': '1rem',    /* 16px */
      '2r': '2rem',    /* 32px */
      '3r': '3rem',    /* 48px */
      '4r': '4rem',    /* 64px */
      '5r': '5rem',    /* 80px */
      '6r': '6rem',    /* 96px */
      '7r': '7rem',    /* 112px */
      '8r': '8rem',    /* 128px */
      '9r': '9rem',    /* 144px */
      '10r': '10rem',  /* 160px */
      '11r': '11rem',  /* 176px */
      '12r': '12rem',  /* 192px */
      '13r': '13rem',  /* 208px */
      '14r': '14rem',  /* 224px */
      '15r': '15rem',  /* 240px */
      '16r': '16rem',  /* 256px */
      '17r': '17rem',  /* 272px */
      '18r': '18rem',  /* 288px */
      '19r': '19rem',  /* 304px */
      '20r': '20rem',  /* 320px */
      '21r': '21rem',  /* 336px */
      '22r': '22rem',  /* 352px */
      '23r': '23rem',  /* 368px */
      '24r': '24rem',  /* 384px */
      '25r': '25rem',  /* 400px */
      '26r': '26rem',  /* 416px */
      '27r': '27rem',  /* 432px */
      '28r': '28rem',  /* 448px */
      '29r': '29rem',  /* 464px */
      '30r': '30rem',  /* 480px */
      '31r': '31rem',  /* 496px */
      '32r': '32rem',  /* 512px */
      '33r': '33rem',  /* 528px */
      '34r': '34rem',  /* 544px */
      '35r': '35rem',  /* 560px */
      '36r': '36rem',  /* 576px */
      '37r': '37rem',  /* 592px */
      '38r': '38rem',  /* 608px */
      '39r': '39rem',  /* 624px */
      '40r': '40rem',  /* 640px */
      '41r': '41rem',  /* 656px */
      '42r': '42rem',  /* 672px */
      '43r': '43rem',  /* 688px */
      '44r': '44rem',  /* 704px */
      '45r': '45rem',  /* 720px */
      '46r': '46rem',  /* 736px */
      '47r': '47rem',  /* 752px */
      '48r': '48rem',  /* 768px */
      '49r': '49rem',  /* 784px */
      '50r': '50rem',   /* 800px */
      '51r': '51rem',   /* 816px */
      '52r': '52rem',   /* 832px */
      '53r': '53rem',   /* 848px */
      '54r': '54rem',   /* 864px */
      '55r': '55rem',   /* 880px */
      '56r': '56rem',   /* 896px */
      '57r': '57rem',   /* 912px */
      '58r': '58rem',   /* 928px */
      '59r': '59rem',   /* 944px */
      '60r': '60rem',   /* 960px */
      '61r': '61rem',   /* 976px */
      '62r': '62rem',   /* 992px */
      '63r': '63rem',   /* 1008px */
      '64r': '64rem',   /* 1024px */
      '65r': '65rem',   /* 1040px */
      '66r': '66rem',   /* 1056px */
      '67r': '67rem',   /* 1072px */
      '68r': '68rem',   /* 1088px */
      '69r': '69rem',   /* 1104px */
      '70r': '70rem',   /* 1120px */
      '71r': '71rem',   /* 1136px */
      '72r': '72rem',   /* 1152px */
      '73r': '73rem',   /* 1168px */
      '74r': '74rem',   /* 1184px */
      '75r': '75rem',   /* 1200px */
      '76r': '76rem',   /* 1216px */
      '77r': '77rem',   /* 1232px */
      '78r': '78rem',   /* 1248px */
      '79r': '79rem',   /* 1264px */
      '80r': '80rem',   /* 1280px */
      '81r': '81rem',   /* 1296px */
      '82r': '82rem',   /* 1312px */
      '83r': '83rem',   /* 1328px */
      '84r': '84rem',   /* 1344px */
      '85r': '85rem',   /* 1360px */
      '86r': '86rem',   /* 1376px */
      '87r': '87rem',   /* 1392px */
      '88r': '88rem',   /* 1408px */
      '89r': '89rem',   /* 1424px */
      '90r': '90rem',   /* 1440px */
      '91r': '91rem',   /* 1456px */
      '92r': '92rem',   /* 1472px */
      '93r': '93rem',   /* 1488px */
      '94r': '94rem',   /* 1504px */
      '95r': '95rem',   /* 1520px */
      '96r': '96rem',   /* 1536px */
      '97r': '97rem',   /* 1552px */
      '98r': '98rem',   /* 1568px */
      '99r': '99rem',   /* 1584px */
      '100r': '100rem', /* 1600px */
      '1px': '1px',
      '2px': '2px',
      '3px': '3px',
      '4px': '4px',
      '5px': '5px',
      '6px': '6px',
      '7px': '7px',
      '8px': '8px',
      '9px': '9px',
      '10px': '10px',
      '11px': '11px',
      '12px': '12px',
      '13px': '13px',
      '14px': '14px',
      '15px': '15px',
      '16px': '16px',
      '17px': '17px',
      '18px': '18px',
      '19px': '19px',
      '20px': '20px',
      '21px': '21px',
      '22px': '22px',
      '23px': '23px',
      '24px': '24px',
      '25px': '25px',
      '26px': '26px',
      '27px': '27px',
      '28px': '28px',
      '29px': '29px',
      '30px': '30px',
      '31px': '31px',
      '32px': '32px',
      '33px': '33px',
      '34px': '34px',
      '35px': '35px',
      '36px': '36px',
      '37px': '37px',
      '38px': '38px',
      '39px': '39px',
      '40px': '40px',
      '41px': '41px',
      '42px': '42px',
      '43px': '43px',
      '44px': '44px',
      '45px': '45px',
      '46px': '46px',
      '47px': '47px',
      '48px': '48px',
      '49px': '49px',
      '50px': '50px',
      '51px': '51px',
      '52px': '52px',
      '53px': '53px',
      '54px': '54px',
      '55px': '55px',
      '56px': '56px',
      '57px': '57px',
      '58px': '58px',
      '59px': '59px',
      '60px': '60px',
      '61px': '61px',
      '62px': '62px',
      '63px': '63px',
      '64px': '64px',
      '65px': '65px',
      '66px': '66px',
      '67px': '67px',
      '68px': '68px',
      '69px': '69px',
      '70px': '70px',
      '71px': '71px',
      '72px': '72px',
      '73px': '73px',
      '74px': '74px',
      '75px': '75px',
      '76px': '76px',
      '77px': '77px',
      '78px': '78px',
      '79px': '79px',
      '80px': '80px',
      '81px': '81px',
      '82px': '82px',
      '83px': '83px',
      '84px': '84px',
      '85px': '85px',
      '86px': '86px',
      '87px': '87px',
      '88px': '88px',
      '89px': '89px',
      '90px': '90px',
      '91px': '91px',
      '92px': '92px',
      '93px': '93px',
      '94px': '94px',
      '95px': '95px',
      '96px': '96px',
      '97px': '97px',
      '98px': '98px',
      '99px': '99px',
      '100px': '100px',
    },
    // break-after: auto, avoid, all, avoid-page, page, left, right, column
    // break-before: auto, avoid, all, avoid-page, page, left, right, column
    // break-inside: auto, avoid, avoid-page, column
    // box-decoration: slice, clone
    // box: border, content
    /* display: 
        block, inline-block, flex, inline-flex, table, inline-table, table-caption, 
        table-cell, table-column, table-column-group, table-footer-group,
        table-header-group, table-row-group, table-row, flow-root, grid, inline-grid,
        contents, list-item, hidden */
    
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

