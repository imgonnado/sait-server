import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity, UserEntity } from '@project/api/database';
import { IProject, IUser } from '@project/shared/interfaces';
import { ProjectDTO } from '../project/dto/project.dto';
import { UserDTO } from '../user/dto/user.dto';
import { UserRepository } from '../user/user.repository';
import _ from 'lodash';
import { ProjectRepository } from '../project/project.repository';
import { OnoffType } from '@project/shared/enum';
@Injectable()
export class FakerService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: UserRepository,
    @InjectRepository(ProjectEntity) private readonly projectRepository: ProjectRepository,
  ) {}

  async makeUser(): Promise<UserDTO> {
    const user: IUser = new UserEntity();

    faker.locale = 'en_US';
    user.email = faker.internet.email();
    user.image = faker.image.avatar();
    user.nickname = faker.name.firstName();
    user.password = faker.internet.password();
    user.loginType = 1;
    faker.locale = 'ko';
    user.name = faker.internet.userName();

    return await this.userRepository.save(user);
  }

  async makeProject(): Promise<ProjectDTO> {
    const project: IProject = new ProjectEntity();

    const randomIndex = _.random(0, 160);
    const fakerData = this.project[randomIndex];

    const kr_location = ['1', '2', '3'];

    console.log('@@@@', fakerData.hitCount / 15);

    project.bookmarkCount = parseInt(fakerData.hitCount / 15 + (fakerData.hitCount % 12) * 3 + '');
    project.hitCount = fakerData.hitCount;
    project.projectTitle = fakerData.projectTitle;
    project.description = fakerData.description;
    project.image = fakerData.thumbnail_url;
    project.onoff = _.sample(OnoffType);
    project.location = kr_location[_.random(0, 2, true)];
    project.locationCode = kr_location[_.random(0, 2, true)];
    project.directLink = fakerData.directLink;

    // project.projectImages = [{ image: faker.image.image(600, 400) }];
    // project.projectKeywords = [];
    // project.projectPermits = [];
    // project.projectRequiredSkills = [];

    // faker.locale = 'ko';
    // project.bookmarkCount = parseInt(faker.random.numeric(_.random(1, 3, true)));
    // project.hitCount = parseInt(faker.random.numeric(_.random(1, 2, true)));
    // project.projectTitle = faker.lorem.sentence();
    // project.description = faker.lorem.paragraph();
    // project.image = faker.image.image();
    // project.onoff = _.sample(OnoffType);
    // project.location = kr_location[_.random(0, 2, true)];
    // project.locationCode = kr_location[_.random(0, 2, true)];
    // project.directLink = '';
    // project.bookmarkCount;

    // project.projectImages = [{ image: faker.image.image(600, 400) }];
    // project.projectKeywords = [];
    // project.projectPermits = [];
    // project.projectRequiredSkills = [];
    //project.projectMembers = ;

    return await this.projectRepository.save(project);
  }

  private techStacks = [
    {
      id: '128',
      name: 'AAC',
    },
    {
      id: '20',
      name: 'AWS',
    },
    {
      id: '82',
      name: 'Alamofire',
    },
    {
      id: '205',
      name: 'Anaconda',
    },
    {
      id: '43',
      name: 'Android',
    },
    {
      id: '122',
      name: 'Angular',
    },
    {
      id: '34',
      name: 'Ant design',
    },
    {
      id: '86',
      name: 'Aos',
    },
    {
      id: '55',
      name: 'Apollo',
    },
    {
      id: '224',
      name: 'Arduino',
    },
    {
      id: '76',
      name: 'Arduino UNO',
    },
    {
      id: '175',
      name: 'Auth0',
    },
    {
      id: '32',
      name: 'Axios',
    },
    {
      id: '209',
      name: 'Azure',
    },
    {
      id: '96',
      name: 'Babel',
    },
    {
      id: '155',
      name: 'Beacon',
    },
    {
      id: '222',
      name: 'Bixby Developer Studio',
    },
    {
      id: '27',
      name: 'Bootstrap',
    },
    {
      id: '185',
      name: 'Bucket4j',
    },
    {
      id: '202',
      name: 'C ',
    },
    {
      id: '201',
      name: 'C++',
    },
    {
      id: '213',
      name: 'CGFloatLiteral',
    },
    {
      id: '203',
      name: 'CMake',
    },
    {
      id: '25',
      name: 'CSS',
    },
    {
      id: '190',
      name: 'Chakra-ui',
    },
    {
      id: '102',
      name: 'Chart.js',
    },
    {
      id: '134',
      name: 'Chromium ',
    },
    {
      id: '211',
      name: 'Circle Imageview Custom',
    },
    {
      id: '212',
      name: 'Circle Indicator',
    },
    {
      id: '60',
      name: 'Cloudinary',
    },
    {
      id: '147',
      name: 'Colyseus',
    },
    {
      id: '112',
      name: 'Cra',
    },
    {
      id: '153',
      name: 'Cypress',
    },
    {
      id: '73',
      name: 'D3.js',
    },
    {
      id: '29',
      name: 'Dart',
    },
    {
      id: '105',
      name: 'DataBinding',
    },
    {
      id: '219',
      name: 'Dependency Injection',
    },
    {
      id: '7',
      name: 'Django',
    },
    {
      id: '47',
      name: 'Docker',
    },
    {
      id: '184',
      name: 'EhCache',
    },
    {
      id: '115',
      name: 'Electron',
    },
    {
      id: '135',
      name: 'Emotion',
    },
    {
      id: '154',
      name: 'Enzyme',
    },
    {
      id: '136',
      name: 'Eslint',
    },
    {
      id: '87',
      name: 'Expo',
    },
    {
      id: '36',
      name: 'Express',
    },
    {
      id: '83',
      name: 'FSCalendar',
    },
    {
      id: '214',
      name: 'Fastlane',
    },
    {
      id: '104',
      name: 'Feign Client',
    },
    {
      id: '57',
      name: 'Firebase',
    },
    {
      id: '50',
      name: 'Flask',
    },
    {
      id: '31',
      name: 'Flutter',
    },
    {
      id: '181',
      name: 'Flyway',
    },
    {
      id: '74',
      name: 'Folium',
    },
    {
      id: '103',
      name: 'Framer',
    },
    {
      id: '26',
      name: 'FusionCharts',
    },
    {
      id: '114',
      name: 'Game-development',
    },
    {
      id: '28',
      name: 'Github API',
    },
    {
      id: '121',
      name: 'Github Actions',
    },
    {
      id: '142',
      name: 'Glide',
    },
    {
      id: '138',
      name: 'Go',
    },
    {
      id: '164',
      name: 'Google SMTP',
    },
    {
      id: '68',
      name: 'Gradle',
    },
    {
      id: '53',
      name: 'GraphQL',
    },
    {
      id: '197',
      name: 'Gson',
    },
    {
      id: '24',
      name: 'HTML',
    },
    {
      id: '61',
      name: 'Heroku',
    },
    {
      id: '80',
      name: 'IOS',
    },
    {
      id: '59',
      name: 'IQKeyboardManagerSwift',
    },
    {
      id: '165',
      name: 'ImgScalr',
    },
    {
      id: '19',
      name: 'JPA',
    },
    {
      id: '163',
      name: 'JUnit5',
    },
    {
      id: '49',
      name: 'JWT',
    },
    {
      id: '183',
      name: 'Jasypt',
    },
    {
      id: '1',
      name: 'Java',
    },
    {
      id: '23',
      name: 'JavaScript',
    },
    {
      id: '69',
      name: 'Jenkins',
    },
    {
      id: '41',
      name: 'Jest',
    },
    {
      id: '106',
      name: 'JetPack',
    },
    {
      id: '93',
      name: 'Jsp',
    },
    {
      id: '118',
      name: 'Jupyter Notebook',
    },
    {
      id: '207',
      name: 'Keras',
    },
    {
      id: '56',
      name: 'Kingfisher',
    },
    {
      id: '129',
      name: 'Koin',
    },
    {
      id: '178',
      name: 'Kotest',
    },
    {
      id: '39',
      name: 'Kotlin',
    },
    {
      id: '120',
      name: 'Kubernetes',
    },
    {
      id: '210',
      name: 'LiveData',
    },
    {
      id: '200',
      name: 'Loading',
    },
    {
      id: '167',
      name: 'Lodash',
    },
    {
      id: '97',
      name: 'Logback',
    },
    {
      id: '143',
      name: 'Lottie-ios',
    },
    {
      id: '198',
      name: 'MPAndroidChart',
    },
    {
      id: '99',
      name: 'MVVM',
    },
    {
      id: '64',
      name: 'MariaDB',
    },
    {
      id: '67',
      name: 'Material-ui',
    },
    {
      id: '94',
      name: 'Mobx',
    },
    {
      id: '179',
      name: 'Mockk',
    },
    {
      id: '149',
      name: 'Monaco Editor',
    },
    {
      id: '79',
      name: 'MongoDB',
    },
    {
      id: '215',
      name: 'Moya',
    },
    {
      id: '144',
      name: 'MultiProgressView',
    },
    {
      id: '220',
      name: 'Mysql',
    },
    {
      id: '125',
      name: 'NativeBase',
    },
    {
      id: '133',
      name: 'NaverMap',
    },
    {
      id: '216',
      name: 'NaverMapSDK',
    },
    {
      id: '72',
      name: 'Neo4j',
    },
    {
      id: '159',
      name: 'NestJS',
    },
    {
      id: '152',
      name: 'Netlify',
    },
    {
      id: '9',
      name: 'Next.js',
    },
    {
      id: '10',
      name: 'Nginx',
    },
    {
      id: '12',
      name: 'Nodejs',
    },
    {
      id: '110',
      name: 'Numpy',
    },
    {
      id: '151',
      name: 'Nuxt.js',
    },
    {
      id: '160',
      name: 'Nx',
    },
    {
      id: '90',
      name: 'Oauth2',
    },
    {
      id: '161',
      name: 'Objective-C',
    },
    {
      id: '132',
      name: 'Okhttp',
    },
    {
      id: '109',
      name: 'Opencv-python',
    },
    {
      id: '62',
      name: 'Oracle Cloud',
    },
    {
      id: '119',
      name: 'PWA',
    },
    {
      id: '70',
      name: 'Pandas',
    },
    {
      id: '37',
      name: 'Passport',
    },
    {
      id: '148',
      name: 'PeerJS',
    },
    {
      id: '146',
      name: 'Phaser3',
    },
    {
      id: '11',
      name: 'PostgreSQL',
    },
    {
      id: '158',
      name: 'Prisma',
    },
    {
      id: '65',
      name: 'Prop-types',
    },
    {
      id: '52',
      name: 'Pug',
    },
    {
      id: '208',
      name: 'PyTorch',
    },
    {
      id: '13',
      name: 'Python',
    },
    {
      id: '171',
      name: 'QueryDSL',
    },
    {
      id: '22',
      name: 'Rabbit MQ ',
    },
    {
      id: '75',
      name: 'Raspberry Pi',
    },
    {
      id: '2',
      name: 'React',
    },
    {
      id: '223',
      name: 'React Flow',
    },
    {
      id: '116',
      name: 'React Hooks',
    },
    {
      id: '126',
      name: 'React Native Reanimated',
    },
    {
      id: '127',
      name: 'React Native SVG',
    },
    {
      id: '124',
      name: 'React Navigation',
    },
    {
      id: '180',
      name: 'React Query',
    },
    {
      id: '4',
      name: 'React Router',
    },
    {
      id: '42',
      name: 'React-Native',
    },
    {
      id: '168',
      name: 'React-device-detect',
    },
    {
      id: '33',
      name: 'React-saga',
    },
    {
      id: '169',
      name: 'React-slick',
    },
    {
      id: '172',
      name: 'React-three-fiber',
    },
    {
      id: '117',
      name: 'React-to-pdf',
    },
    {
      id: '66',
      name: 'Reactstrap',
    },
    {
      id: '77',
      name: 'Recoil',
    },
    {
      id: '51',
      name: 'Redis',
    },
    {
      id: '3',
      name: 'Redux',
    },
    {
      id: '188',
      name: 'Redux Toolkit',
    },
    {
      id: '174',
      name: 'Redux-persist',
    },
    {
      id: '173',
      name: 'Redux-saga',
    },
    {
      id: '5',
      name: 'Redux-thunk',
    },
    {
      id: '182',
      name: 'RestDocs',
    },
    {
      id: '130',
      name: 'Retrofit',
    },
    {
      id: '177',
      name: 'Rich Text Format',
    },
    {
      id: '30',
      name: 'Ruby',
    },
    {
      id: '131',
      name: 'RxJava',
    },
    {
      id: '98',
      name: 'RxSwift',
    },
    {
      id: '44',
      name: 'SCSS',
    },
    {
      id: '8',
      name: 'SQLite',
    },
    {
      id: '6',
      name: 'Sass',
    },
    {
      id: '71',
      name: 'Scikit learn',
    },
    {
      id: '206',
      name: 'Scipy',
    },
    {
      id: '150',
      name: 'Semantic UI',
    },
    {
      id: '63',
      name: 'Sequelize',
    },
    {
      id: '187',
      name: 'Slf4j',
    },
    {
      id: '84',
      name: 'SnapKit',
    },
    {
      id: '113',
      name: 'Snowpack',
    },
    {
      id: '157',
      name: 'Socket I.O',
    },
    {
      id: '204',
      name: 'Solidity',
    },
    {
      id: '100',
      name: 'Sopt',
    },
    {
      id: '92',
      name: 'Spring',
    },
    {
      id: '18',
      name: 'Spring Batch',
    },
    {
      id: '16',
      name: 'Spring Boot',
    },
    {
      id: '17',
      name: 'Spring Security',
    },
    {
      id: '89',
      name: 'Spring WebSocket',
    },
    {
      id: '162',
      name: 'Starlark',
    },
    {
      id: '170',
      name: 'Stompjs',
    },
    {
      id: '35',
      name: 'Styled-components',
    },
    {
      id: '189',
      name: 'Supabase',
    },
    {
      id: '48',
      name: 'Swagger',
    },
    {
      id: '15',
      name: 'Swift',
    },
    {
      id: '217',
      name: 'SwiftKeychainWrapper',
    },
    {
      id: '145',
      name: 'SwiftLint',
    },
    {
      id: '192',
      name: 'SwiftyJSON',
    },
    {
      id: '78',
      name: 'Swiper',
    },
    {
      id: '156',
      name: 'T map API',
    },
    {
      id: '140',
      name: 'Tailwind CSS',
    },
    {
      id: '108',
      name: 'Tensorflow',
    },
    {
      id: '58',
      name: 'TextFieldEffects',
    },
    {
      id: '101',
      name: 'Three.js',
    },
    {
      id: '38',
      name: 'Thymeleaf',
    },
    {
      id: '193',
      name: 'Toast-Swift',
    },
    {
      id: '176',
      name: 'Twitter API',
    },
    {
      id: '40',
      name: 'Typescript',
    },
    {
      id: '46',
      name: 'UIKit',
    },
    {
      id: '45',
      name: 'UserDefaults',
    },
    {
      id: '218',
      name: 'ViewBinding',
    },
    {
      id: '107',
      name: 'ViewModel',
    },
    {
      id: '141',
      name: 'ViewPager2',
    },
    {
      id: '199',
      name: 'ViewPagerIndicator',
    },
    {
      id: '14',
      name: 'Vue.js',
    },
    {
      id: '111',
      name: 'Vuetify',
    },
    {
      id: '166',
      name: 'WebRTC',
    },
    {
      id: '139',
      name: 'WebSocket',
    },
    {
      id: '95',
      name: 'Webpack',
    },
    {
      id: '81',
      name: 'Xcode',
    },
    {
      id: '221',
      name: 'jQuery',
    },
    {
      id: '91',
      name: 'sockJS',
    },
  ];

  private project = [
    {
      id: '1',
      projectTitle: '[FE] 1일 1미션 인증 및 공유 웹 어플리케이션',
      description:
        'Daily-Mission은 커뮤니티 기반의 미션 공유 플랫폼 입니다.\n원하는 미션에 참여하여 매일 미션을 완료하고, 참여자들과 완료된 미션을 공유해 볼 수 있습니다.',
      owner_name: 'nowoesiy',
      directLink: 'https://github.com/nowoesiy/Daily-Mission-Front-Web',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'React Router',
        },
        {
          name: 'Redux-thunk',
        },
        {
          name: 'Sass',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/39932233/80935943-f6854380-8e09-11ea-85b9-b41e78390b92.jpg',
      hitCount: 1300,
      createdAt: '2021-07-27T07:06:14.796Z',
      reactions: [],
      comments: [],
    },
    {
      id: '2',
      projectTitle: '미니멀한 디자인과 신기술을 응용한 빠른 블로그',
      description:
        '"예쁘고 유니크한 블로그 없을까요?" 🙋‍♂️ 여기 있습니다! 블렉스는 가입형 블로그로 회원이라면 누구나 글을 자유롭게 작성할 수 있습니다. 무엇보다 쓰는 사람이 없어서 매우 유니크합니다! 블렉스는 미니멀한 디자인과 신기술을 응용한 빠른 웹사이트를 지향하며 AD-Free, 3세대 블로그를 과감히 꿈꿉니다. 연락은 baealex@hey.com으로 부탁드리며 의견은 discussions에 남겨주세요!',
      owner_name: 'baealex',
      directLink: 'https://github.com/baealex/BLEX',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Django',
        },
        {
          name: 'SQLite',
        },
        {
          name: 'Next.js',
        },
        {
          name: 'Nginx',
        },
        {
          name: 'PostgreSQL',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/35596687/120072037-bce64100-c0cc-11eb-95d3-900608dfd7ad.png',
      hitCount: 1031,
      createdAt: '2021-07-27T09:01:48.367Z',
      reactions: [
        {
          id: '204',
        },
        {
          id: '224',
        },
        {
          id: '266',
        },
      ],
      comments: [],
    },
    {
      id: '4',
      projectTitle: '기술스택만 입력해서 이력서를 만들어보자 ',
      description: '기술스택만 입력해서 이력서를 만들어보자 ',
      owner_name: 'JuneBuug',
      directLink: 'https://github.com/JuneBuug/make_your_resume',
      tech_stacks: [
        {
          name: 'Django',
        },
        {
          name: 'Python',
        },
        {
          name: 'Vue.js',
        },
      ],
      thumbnail_url: 'https://raw.githubusercontent.com/JuneBuug/make_your_resume/master/README/junekim.png',
      hitCount: 1791,
      createdAt: '2021-07-27T09:16:07.207Z',
      reactions: [
        {
          id: '318',
        },
      ],
      comments: [],
    },
    {
      id: '5',
      projectTitle: '실시간 날씨 현황 확인 사이트',
      description: '날씨 OpenAPI를 이용해서 Apple 기본 날씨앱 또는 Yahoo 날씨앱과 유사한 기능셋을 구현하기',
      owner_name: 'daheenallwhite',
      directLink: 'https://github.com/daheenallwhite/WeatherApp',
      tech_stacks: [
        {
          name: 'Swift',
        },
      ],
      thumbnail_url: 'https://devfolio.link:1337/uploads/2021_08_06_7_18_57_ec72408e54.png',
      hitCount: 886,
      createdAt: '2021-07-27T09:19:06.675Z',
      reactions: [],
      comments: [],
    },
    {
      id: '7',
      projectTitle: '[BE] 1일 1미션 인증 및 공유 웹 어플리케이션',
      description:
        'Daily-Mission은 커뮤니티 기반의 미션 공유 플랫폼 입니다.\n\n원하는 미션에 참여하여 매일 미션을 완료하고, 참여자들과 완료된 미션을 공유해 볼 수 있습니',
      owner_name: 'MinhoLee93',
      directLink: 'https://github.com/MinhoLee93/Daily-Mission-Back-Web',
      tech_stacks: [
        {
          name: 'Nginx',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'Spring Security',
        },
        {
          name: 'Spring Batch',
        },
        {
          name: 'JPA',
        },
        {
          name: 'AWS',
        },
        {
          name: 'Rabbit MQ ',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/39932233/80935943-f6854380-8e09-11ea-85b9-b41e78390b92.jpg',
      hitCount: 1440,
      createdAt: '2021-07-30T04:45:15.237Z',
      reactions: [
        {
          id: '104',
        },
      ],
      comments: [],
    },
    {
      id: '8',
      projectTitle: '곽철용 짤 생성기',
      description: '웹사이트에서 간편하게 곽철용 짤을 편집하고, 다운로드하여 친구들에게 전송할 수 있습니다.',
      owner_name: 'Jongyoon Jeong',
      directLink: 'https://github.com/wormwlrm/kwakcheolyong',
      tech_stacks: [
        {
          name: 'Vue.js',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
      ],
      thumbnail_url: 'https://raw.githubusercontent.com/wormwlrm/kwakcheolyong/master/preview.gif',
      hitCount: 3003,
      createdAt: '2021-07-30T04:53:15.914Z',
      reactions: [
        {
          id: '59',
        },
        {
          id: '66',
        },
        {
          id: '67',
        },
        {
          id: '111',
        },
        {
          id: '117',
        },
        {
          id: '251',
        },
        {
          id: '253',
        },
        {
          id: '316',
        },
      ],
      comments: [
        {
          id: '19',
        },
        {
          id: '37',
        },
        {
          id: '50',
        },
      ],
    },
    {
      id: '9',
      projectTitle: 'How Much More 🤑🤑🤑',
      description: '꿈만 같은 XXX을 구매할려면 얼마나 많은 돈을 더 벌어야 되는지 알려드립니다.',
      owner_name: ' Tak',
      directLink: 'https://github.com/dodoongtak/HowMuchMore',
      tech_stacks: [
        {
          name: 'JavaScript',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/77006427/116016951-337cc280-a679-11eb-84ae-fb966174cf41.png',
      hitCount: 1437,
      createdAt: '2021-07-30T05:06:07.280Z',
      reactions: [
        {
          id: '79',
        },
        {
          id: '276',
        },
      ],
      comments: [],
    },
    {
      id: '10',
      projectTitle: '국내외 코로나에대한 정보와 데이터를 제공하는 사이트',
      description:
        " 국내외 코로나에대한 정보와 데이터를 제공하는 사이트입니다. API를 활용한 국내외 코로나 통계 자료 제공합니다.\n\n국내자료 : 국내 종합 현황, 시도별 현황, 거리두기 정보 (링크), 백신 접종 센터 정보. 국내 주요 소식 ('코로나 백신' 네이버 뉴스, 다음 웹문서 결과)\n\n해외자료: 해외 종합현황, 주변 국가별 현황, 전 세계 대시보드",
      owner_name: 'baegofda',
      directLink: 'https://github.com/baegofda/Project-GOC',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Nodejs',
        },
      ],
      thumbnail_url:
        'https://camo.githubusercontent.com/3bccbd5d3f7f476c84ebbb9779c34e89b4d67a49262c7cdcc7b7958171a7b6fc/68747470733a2f2f696d67312e6461756d63646e2e6e65742f7468756d622f523132383078302f3f73636f64653d6d746973746f72793226666e616d653d6874747073253341253246253246626c6f672e6b616b616f63646e2e6e6574253246646e253246624939514150253246627471305139526f79564a25324631664c3867597a70664969616e4872384e73506b4930253246696d672e706e67',
      hitCount: 1345,
      createdAt: '2021-07-30T08:34:53.603Z',
      reactions: [
        {
          id: '20',
        },
        {
          id: '103',
        },
        {
          id: '134',
        },
      ],
      comments: [
        {
          id: '26',
        },
      ],
    },
    {
      id: '11',
      projectTitle: '플루터로 만들어본 독서 기록 앱',
      description: '🔖 📱 A book logging app built with Flutter',
      owner_name: 'heejongahn',
      directLink: 'https://github.com/heejongahn/galpi',
      tech_stacks: [
        {
          name: 'Dart',
        },
        {
          name: 'Ruby',
        },
        {
          name: 'Flutter',
        },
      ],
      thumbnail_url: 'https://github.com/heejongahn/galpi/raw/master/docs/static/galpi.gif',
      hitCount: 974,
      createdAt: '2021-08-06T09:09:43.859Z',
      reactions: [
        {
          id: '23',
        },
        {
          id: '68',
        },
      ],
      comments: [],
    },
    {
      id: '12',
      projectTitle: '깃헙 유저정보를 검색해보자',
      description: 'UR-REPO\nA Github search application using Github API.',
      owner_name: 'goleedev',
      directLink: 'https://github.com/goleedev/ur-repo',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'FusionCharts',
        },
        {
          name: 'Bootstrap',
        },
      ],
      thumbnail_url: 'https://raw.githubusercontent.com/goleedev/ur-repo/master/src/images/github-search.gif',
      hitCount: 842,
      createdAt: '2021-08-06T09:17:43.777Z',
      reactions: [
        {
          id: '57',
        },
        {
          id: '86',
        },
        {
          id: '94',
        },
      ],
      comments: [],
    },
    {
      id: '13',
      projectTitle: '프론트엔드 취업 소식을 한눈에',
      description:
        '프론트엔드 직군으로 취업 및 이직을 준비하는 사람들끼리 구인 공고를 공유하는 사이트입니다. 사용자는 공고를 등록 혹은 수정할 수 있습니다. 등록된 공고에 다른 사용자들은 댓글을 달 수 있고, 관심 등록으로 원하는 공고를 따로 저장도 가능합니다. 또, 검색과 기술 태그를 통한 필터링 기능으로 원하는 공고만 제한해서 볼 수 있습니다.',
      owner_name: 'geum-yong',
      directLink: 'https://github.com/geum-yong/FE_project',
      tech_stacks: [
        {
          name: 'JavaScript',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/128492475-b71ef571-b64f-408f-8b24-4e08075fd078.png',
      hitCount: 1753,
      createdAt: '2021-08-06T09:29:21.023Z',
      reactions: [
        {
          id: '35',
        },
        {
          id: '50',
        },
        {
          id: '305',
        },
      ],
      comments: [],
    },
    {
      id: '14',
      projectTitle: 'To Record Everything - 일정 관리 사이트',
      description:
        '📌 다양한 todo-list나 일정 관리 프로그램 사이트가 있지만 나에게 맞지 않는 사람!\n\n📌 기능이 너무 많아 혼랍스럽고 불편하거나, 내가 필요한 기능이 없는 사람!',
      owner_name: 'JhsK',
      directLink: 'https://github.com/JhsK/Tre',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'React-saga',
        },
        {
          name: 'Styled-components',
        },
        {
          name: 'Express',
        },
        {
          name: 'Passport',
        },
      ],
      thumbnail_url: 'https://raw.githubusercontent.com/JhsK/Tre/master/front/public/image/memory_page.gif',
      hitCount: 1338,
      createdAt: '2021-08-06T09:35:58.637Z',
      reactions: [
        {
          id: '51',
        },
        {
          id: '84',
        },
        {
          id: '194',
        },
      ],
      comments: [],
    },
    {
      id: '15',
      projectTitle: '☕ Cafe Ranking Service for Cagong people 👨‍💻👩‍💻',
      description:
        'Cafe Ranking Service for people who study at cafe (spring boot)\nproject-cafe-ranking을 기초로 Spring Boot를 이용한 웹 어플리케이션 개발',
      owner_name: 'beaniejoy',
      directLink: 'https://github.com/beaniejoy/cagong-ranking-project',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/41675375/83968654-b3852700-a905-11ea-9f6b-611f79a122cc.png',
      hitCount: 6685,
      createdAt: '2021-08-06T09:40:27.676Z',
      reactions: [
        {
          id: '22',
        },
        {
          id: '48',
        },
      ],
      comments: [],
    },
    {
      id: '16',
      projectTitle: 'Project-Momenton',
      description: 'Momentum을 따라 구현해보기',
      owner_name: 'baegofda',
      directLink: 'https://github.com/baegofda/Project-Momen',
      tech_stacks: [
        {
          name: 'JavaScript',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
      ],
      thumbnail_url:
        'https://camo.githubusercontent.com/a1be5767718e456e85c71a16e4cb5caa78d231d3f9a02876e293bd3411356464/68747470733a2f2f696d67312e6461756d63646e2e6e65742f7468756d622f523132383078302f3f73636f64653d6d746973746f72793226666e616d653d6874747073253341253246253246626c6f672e6b616b616f63646e2e6e6574253246646e253246725177667a2532466274715576447161557052253246664678586e6a3770726879376b634c586e434e787730253246696d672e6a7067',
      hitCount: 1067,
      createdAt: '2021-08-13T08:17:54.654Z',
      reactions: [
        {
          id: '43',
        },
        {
          id: '265',
        },
      ],
      comments: [],
    },
    {
      id: '17',
      projectTitle: '학부생을 위한 개발 커리어 구독 / 관리 앱',
      description: '인턴십 정보, 세미나 정보, 커뮤니티 정보 들을 한눈에 볼 수 있고 관리할 수 있는 모바일 앱',
      owner_name: 'JuneBuug',
      directLink: 'https://github.com/JuneBuug/ForDevCareer',
      tech_stacks: [
        {
          name: 'Kotlin',
        },
      ],
      thumbnail_url: 'https://raw.githubusercontent.com/JuneBuug/ForDevCareer/master/README/screenshot_3.png',
      hitCount: 1007,
      createdAt: '2021-08-13T08:17:58.536Z',
      reactions: [
        {
          id: '42',
        },
        {
          id: '76',
        },
      ],
      comments: [],
    },
    {
      id: '18',
      projectTitle: '[FE] 개발자들의 랭킹을 보여줍니다',
      description:
        'Over Programmed Good Coding 프론트엔드 레포지토리 React 학습을 위한 토이프로젝트입니다.\n\n개발자들의 랭킹을 보여줍니다!',
      owner_name: 'DirtyBoyz',
      directLink: 'https://github.com/DirtyBoyz/opgc_frontend',
      tech_stacks: [
        {
          name: 'Redux',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
        {
          name: 'React-saga',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'Jest',
        },
      ],
      thumbnail_url: 'https://devfolio.link:1337/uploads/2021_08_13_4_26_09_1a5da5d91e.png',
      hitCount: 985,
      createdAt: '2021-08-13T08:18:02.123Z',
      reactions: [
        {
          id: '41',
        },
        {
          id: '49',
        },
        {
          id: '75',
        },
        {
          id: '123',
        },
      ],
      comments: [],
    },
    {
      id: '19',
      projectTitle: '[BE] 개발자들의 랭킹을 보여줍니다',
      description: 'Github에서 활동중인 개발자들의 랭킹을 보여줍니다',
      owner_name: 'DirtyBoyz',
      directLink: 'https://github.com/DirtyBoyz/opgc_backend',
      tech_stacks: [
        {
          name: 'Django',
        },
        {
          name: 'Python',
        },
      ],
      thumbnail_url: 'https://devfolio.link:1337/uploads/2021_08_13_4_26_09_1a5da5d91e.png',
      hitCount: 1200,
      createdAt: '2021-08-13T08:18:05.170Z',
      reactions: [
        {
          id: '34',
        },
        {
          id: '40',
        },
        {
          id: '63',
        },
        {
          id: '74',
        },
        {
          id: '310',
        },
      ],
      comments: [],
    },
    {
      id: '20',
      projectTitle: '주식 투자를 도와주는 Quant 기반 종목 추천 모바일 앱',
      description:
        '7개 중요 투자지표를 토대로 사용자가 비중치를 직접 입력하면 이 비중치들을 기준으로 계산하여 1 ~ 10위 까지의 종목을 제시해주는 앱입니다.\n\n이를 통해 주관적인 판단에 의한 투자가 아닌 기계적으로 투자할 수 있게 도와주는 서비스를 제공합니다.\n\n적립식 주식 투자, 다양한 투자 포트폴리오 구성 등 여러 부문에 활용할 수 있을 것으로 기대합니다.',
      owner_name: 'beaniejoy',
      directLink: 'https://github.com/beaniejoy/do-it-quant',
      tech_stacks: [
        {
          name: 'Python',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'React-Native',
        },
        {
          name: 'Android',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/41675375/90777248-19465400-e336-11ea-82d0-91ab8140d93c.png',
      hitCount: 1218,
      createdAt: '2021-08-13T08:18:08.099Z',
      reactions: [
        {
          id: '33',
        },
        {
          id: '39',
        },
        {
          id: '47',
        },
        {
          id: '55',
        },
        {
          id: '73',
        },
        {
          id: '303',
        },
      ],
      comments: [
        {
          id: '17',
        },
      ],
    },
    {
      id: '21',
      projectTitle: '👨‍👨‍👧 원라인코스(One-Line Course)',
      description: '본인에게 적합한 개발 관련 온라인 강의를 통합해 검색할 수 있는 개인형 강의 추천 사이트',
      owner_name: 'LeeJuHyun',
      directLink: 'https://github.com/JuHyun419/one-line-course',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'JPA',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'SCSS',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/130199348-52029162-aafc-42d7-a548-121bc6e48660.png',
      hitCount: 1564,
      createdAt: '2021-08-20T07:50:13.638Z',
      reactions: [
        {
          id: '72',
        },
        {
          id: '77',
        },
        {
          id: '274',
        },
      ],
      comments: [],
    },
    {
      id: '22',
      projectTitle: '🌏 SAVE EARTH | 지구를 지켜라',
      description:
        '친환경에 관심은 있지만 어떤 식으로 실천해야 하는지 모르는 분들이 많습니다.\nSave Earth는 친환경에 관심이 있는 모든 분들에게 지구를 지킬 수 있는 다양한 정보를 제공하고자 합니다! 🙌🌏💪',
      owner_name: 'NoEarthNoUs',
      directLink: 'https://github.com/NoEarthNoUs/SaveEarth',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'React',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'JPA',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/130199307-3357cb4b-515f-4904-ba04-58fc620ee2b8.png',
      hitCount: 2539,
      createdAt: '2021-08-20T07:50:24.754Z',
      reactions: [
        {
          id: '71',
        },
        {
          id: '313',
        },
      ],
      comments: [],
    },
    {
      id: '23',
      projectTitle: 'My Little Popcat 🐈',
      description: 'My little pop cat - 고양이를 탭하면 어떻게 될까?',
      owner_name: 'ChoiysApple',
      directLink: 'https://github.com/ChoiysApple/My-Little-Popcat/',
      tech_stacks: [
        {
          name: 'Swift',
        },
        {
          name: 'UserDefaults',
        },
        {
          name: 'UIKit',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/43776784/124684902-1e3ed280-df0b-11eb-9129-1313bdc280b0.gif',
      hitCount: 2178,
      createdAt: '2021-08-20T07:50:28.571Z',
      reactions: [
        {
          id: '64',
        },
        {
          id: '70',
        },
        {
          id: '78',
        },
        {
          id: '80',
        },
        {
          id: '82',
        },
        {
          id: '83',
        },
      ],
      comments: [
        {
          id: '20',
        },
      ],
    },
    {
      id: '24',
      projectTitle: '썸네일 메이커(thumbnail_maker)',
      description:
        '누구든지 10초 안에 무난한 벨로그 썸네일을 만들 수 있습니다. 어도비, 오피스 없어도 됩니다. 당신은 개발과 글쓰기에만 집중하세요.',
      owner_name: 'wonkooklee',
      directLink: 'https://github.com/wonkooklee/thumbnail_maker',
      tech_stacks: [
        {
          name: 'JavaScript',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
      ],
      thumbnail_url:
        'https://camo.githubusercontent.com/942b99ded4aa91a6672e2c5ec25c832981e7ff68d51989259b0dd82cf9cca0d3/68747470733a2f2f6d656469612e766c70742e75732f696d616765732f6f6e656f6f6b2f706f73742f37333532303363332d653861332d346639312d386630392d6235623238613138616566392f657a6769662d372d3131303564383961643530372e676966',
      hitCount: 3913,
      createdAt: '2021-08-20T07:50:34.309Z',
      reactions: [
        {
          id: '65',
        },
        {
          id: '69',
        },
        {
          id: '81',
        },
        {
          id: '110',
        },
        {
          id: '207',
        },
        {
          id: '230',
        },
        {
          id: '252',
        },
        {
          id: '263',
        },
        {
          id: '271',
        },
        {
          id: '285',
        },
        {
          id: '302',
        },
        {
          id: '311',
        },
        {
          id: '317',
        },
      ],
      comments: [
        {
          id: '34',
        },
      ],
    },
    {
      id: '25',
      projectTitle: '[BE] 서강대학교 개설교과목 정보 조회 서비스',
      description:
        "항상 시간표를 짜기 전, 수강신청을 하기 전 들어가는 '개설교과목정보 사이트'를 사용하며 느꼈던 문제점들을 조금이나마 개선하기 위해 시작하게 된 서비스입니다.\n여러 REST API를 제공하고 있습니다.",
      owner_name: 'facade-team',
      directLink: 'https://github.com/facade-team/sogang-register-server',
      tech_stacks: [
        {
          name: 'Python',
        },
        {
          name: 'Docker',
        },
        {
          name: 'Swagger',
        },
        {
          name: 'JWT',
        },
        {
          name: 'Flask',
        },
      ],
      thumbnail_url:
        'https://camo.githubusercontent.com/5c3fa766050697eeb86bae09c86878d1413021d3a3867f5396ac53bc449c66a1/68747470733a2f2f7777772e6e6f74696f6e2e736f2f696d6167652f687474707325334125324625324673332d75732d776573742d322e616d617a6f6e6177732e636f6d2532467365637572652e6e6f74696f6e2d7374617469632e636f6d25324630386138663062332d313231312d343666632d393466322d6531666336363932663036302532462545312538342538392545312538352542332545312538342538462545312538352542332545312538342538352545312538352542352545312538362541422545312538342538392545312538352541332545312538362542415f323032312d30382d31355f2545312538342538422545312538352541392545312538342539322545312538352541455f352e35322e33372e706e673f7461626c653d626c6f636b2669643d62323362316466382d356465622d343532322d383631652d64613635663438366532353726737061636549643d32343562376361622d373863652d346563612d616437632d6136353865623939366334322677696474683d32333630267573657249643d64653831636165382d643865612d346461312d613537312d3238323366363861336432642663616368653d7632',
      hitCount: 1109,
      createdAt: '2021-08-27T08:22:03.215Z',
      reactions: [
        {
          id: '89',
        },
        {
          id: '91',
        },
        {
          id: '97',
        },
        {
          id: '106',
        },
      ],
      comments: [],
    },
    {
      id: '26',
      projectTitle: '[FE] 서강대학교 개설교과목 정보 조회 서비스',
      description:
        '서강신청 은 항상 시간표를 짜기 전, 그리고 수강신청을 하기 전에 들어가는 서강대학교 개설교과목정보 사이트를 사용하며 느꼈던 문제점들을 조금이나마 개선하기 위해 시작하게 된 서비스입니다.',
      owner_name: 'facade-team',
      directLink: 'https://github.com/facade-team/sogang-register-web',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Nodejs',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'Styled-components',
        },
      ],
      thumbnail_url:
        'https://raw.githubusercontent.com/facade-team/sogang-register-web/master/src/assets/img/%EC%84%9C%EA%B0%95%EC%8B%A0%EC%B2%AD_%EB%B0%B0%EB%84%88.png',
      hitCount: 1212,
      createdAt: '2021-08-27T08:22:07.021Z',
      reactions: [
        {
          id: '88',
        },
        {
          id: '90',
        },
        {
          id: '92',
        },
        {
          id: '93',
        },
        {
          id: '98',
        },
        {
          id: '101',
        },
        {
          id: '105',
        },
      ],
      comments: [],
    },
    {
      id: '27',
      projectTitle: '[FE] ARS(Algorithm Review Service) 개인 프로젝트',
      description: 'ARS는 Algorithm Review Service의 약자로 알고리즘 복습을 할 수 있는 프로젝트이다.\n(나만의..)',
      owner_name: 'MoonAyoung',
      directLink: 'https://github.com/ayoung0073/ARS-frontend',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'Ant design',
        },
      ],
      thumbnail_url: 'https://raw.githubusercontent.com/ayoung0073/ARS-frontend/main/assets/main.png',
      hitCount: 642,
      createdAt: '2021-08-27T08:22:09.914Z',
      reactions: [
        {
          id: '228',
        },
      ],
      comments: [],
    },
    {
      id: '28',
      projectTitle: '[BE] ARS(Algorithm Review Service) 개인 프로젝트 Backend',
      description:
        '알고리즘 복습을 편하게 할 수 있는 "저"만의 웹서비스입니다.\n태그별 문제 리스트를 조회할 수 있고, 검색을 통해 리뷰 리스트를 조회할 수 있습니다.\n등록된 문제에 계속해서 복습 내용을 추가할 수 있고, 문제 상세 보기에 복습 목록이 함께 보여집니다.\n복습 알림 서비스 기능으로 알림 날짜를 설정하면 해당 날짜에 Slack을 통해 복습 알림을 받을 수 있습니다.',
      owner_name: 'MoonAyoung',
      directLink: 'https://github.com/ayoung0073/ARS-backend',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'Nginx',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'Docker',
        },
        {
          name: 'Redis',
        },
      ],
      thumbnail_url: 'https://media.vlpt.us/images/ayoung0073/post/d3fc2627-0529-4790-a46d-f4cedfba6f0c/thumbnail.gif',
      hitCount: 1624,
      createdAt: '2021-08-27T08:22:30.309Z',
      reactions: [
        {
          id: '107',
        },
        {
          id: '220',
        },
        {
          id: '262',
        },
      ],
      comments: [],
    },
    {
      id: '29',
      projectTitle: '✋Hola! 스터디, 사이드 프로젝트 팀원을 만나는 가장 쉬운 방법.',
      description:
        '스터디, 모각코, 사이드 프로젝트 등 함께하고 싶은 개발자를 Hola!에서 찾으세요.🙆🏻‍♀️\n\n원하는 기술 스택을 선택해서 팀원을 쉽게 구할 수 있어요.',
      owner_name: 'Sihyun',
      directLink: 'https://github.com/Siihyun/hola',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Nginx',
        },
        {
          name: 'Nodejs',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/131096309-fe90c4a1-6f94-4bed-96b3-50ca525c3f4a.png',
      hitCount: 4708,
      createdAt: '2021-08-27T08:23:01.326Z',
      reactions: [
        {
          id: '85',
        },
        {
          id: '87',
        },
        {
          id: '95',
        },
        {
          id: '100',
        },
        {
          id: '121',
        },
        {
          id: '130',
        },
        {
          id: '145',
        },
        {
          id: '146',
        },
        {
          id: '147',
        },
        {
          id: '148',
        },
        {
          id: '201',
        },
        {
          id: '202',
        },
        {
          id: '225',
        },
      ],
      comments: [],
    },
    {
      id: '30',
      projectTitle: '[FE] MANNALGA와 함께 모임을! ',
      description: '취미 및 동호회 서비스 MANNALGA 에서\n당신의 관심사를 등록하고 모임에 참여하세요!',
      owner_name: 'TASK-FORCE',
      directLink: 'https://github.com/TASK-FORCE/mannalga-front-app',
      tech_stacks: [
        {
          name: 'Vue.js',
        },
        {
          name: 'Typescript',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/7741589/115144475-ddf85280-a087-11eb-85ae-8f41f6a15a9a.png',
      hitCount: 486,
      createdAt: '2021-09-03T09:02:31.424Z',
      reactions: [],
      comments: [],
    },
    {
      id: '31',
      projectTitle: '[BE] MANNALGA와 함께 모임 관리하자',
      description: '취미 및 동호회 서비스 MANNALGA 에서\n당신의 관심사를 등록하고 모임에 참여하세요!',
      owner_name: 'TASK-FORCE',
      directLink: 'https://github.com/TASK-FORCE/mannalga-api',
      tech_stacks: [
        {
          name: 'Spring Boot',
        },
        {
          name: 'Kotlin',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/7741589/115144475-ddf85280-a087-11eb-85ae-8f41f6a15a9a.png',
      hitCount: 707,
      createdAt: '2021-09-03T09:02:35.456Z',
      reactions: [
        {
          id: '200',
        },
      ],
      comments: [],
    },
    {
      id: '32',
      projectTitle: '🛍 E-commerce online fashion store MOMO',
      description: '깔끔하고 세련된 디자인의 E-commerce형태의 웹 서비스입니다. ',
      owner_name: ' Minji Lee',
      directLink: 'https://github.com/2minzy/MOMO_online_store',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'Nodejs',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'Express',
        },
        {
          name: 'SCSS',
        },
      ],
      thumbnail_url:
        'https://camo.githubusercontent.com/6683e14f4e4c52d9674994d22df908510e01d015ee1b39e79036e0a0fe64ae28/68747470733a2f2f696d616765732e76656c6f672e696f2f696d616765732f6262696f336f2f706f73742f37323761373262632d323834332d343338642d613033652d3133663464323666313630612f2545312538342538422545312538352541392545312538342538372545312538352541352545312538342538372545312538352542322545312538342538372545312538352542322e676966',
      hitCount: 1026,
      createdAt: '2021-09-03T09:02:37.650Z',
      reactions: [
        {
          id: '114',
        },
        {
          id: '307',
        },
      ],
      comments: [],
    },
    {
      id: '33',
      projectTitle: '🎊 Contest-collection 어떤 공모전이 있는지 한 눈에 볼 수 있는 서비스',
      description: '🎊 공모전 모음 웹서비스 with Pug + Node.js + MongoDB\n',
      owner_name: 'leyuri',
      directLink: 'https://github.com/leyuri/C.C',
      tech_stacks: [
        {
          name: 'Nodejs',
        },
        {
          name: 'Express',
        },
        {
          name: 'SCSS',
        },
        {
          name: 'Pug',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/33794732/68991929-b0faab80-08a7-11ea-9d47-7a27f4225a96.png',
      hitCount: 498,
      createdAt: '2021-09-03T09:02:57.732Z',
      reactions: [
        {
          id: '113',
        },
      ],
      comments: [
        {
          id: '30',
        },
      ],
    },
    {
      id: '34',
      projectTitle: '🧘‍♀️ Asana -Take a breath! Save your favorite meditation streaming content',
      description:
        'tAsana는 명상이나 집중을 위해 자신이 주로 듣는 음악 링크를 저장해 플레이리스트를 보여주고, 플레이 할 수 있는 url 링크 저장소 서비스입니다.\n',
      owner_name: ' Minji Lee',
      directLink: 'https://github.com/2minzy/Asana',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Next.js',
        },
        {
          name: 'HTML',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'GraphQL',
        },
        {
          name: 'Apollo',
        },
      ],
      thumbnail_url:
        'https://camo.githubusercontent.com/cde8c961df1e9a1da4355bf13080ba6c4b97b0b5e1238f7d2bd077b0fcff399b/68747470733a2f2f696d616765732e76656c6f672e696f2f696d616765732f6262696f336f2f706f73742f37626638333030302d643362312d346566622d626337632d6335613133376664336330322f2545312538342538352545312538352541322545312538362541422545312538342538332545312538352542352545312538362542432e676966',
      hitCount: 521,
      createdAt: '2021-09-03T09:03:18.193Z',
      reactions: [
        {
          id: '108',
        },
        {
          id: '112',
        },
      ],
      comments: [],
    },
    {
      id: '35',
      projectTitle: '✏️라이팅(writing) 나의 꾸준함을 기르는 작은 행동',
      description:
        '이 앱은 하루하루 일어난 일들에 대해 적어보는 앱입니다. 일기앱이죠.\n\n하지만, 꾸준함을 만들기 위해 챌린지 라는 시스템을 도입해 자신의 꾸준함을 평가해 볼 수 있는 기회를 마련하였고, 깃허브의 잔디처럼 작성시 잔디가 쌓이는 UI또한 존재합니다.\n\n\n',
      owner_name: 'ITlearning',
      directLink: 'https://github.com/ITlearning/Writing',
      tech_stacks: [
        {
          name: 'Swift',
        },
        {
          name: 'Firebase',
        },
        {
          name: 'TextFieldEffects',
        },
        {
          name: 'IQKeyboardManagerSwift',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/11778058/130349329-6eeed2e6-ff33-4203-a37a-47ba791ba49f.gif',
      hitCount: 1111,
      createdAt: '2021-09-10T07:54:32.603Z',
      reactions: [
        {
          id: '154',
        },
        {
          id: '254',
        },
      ],
      comments: [],
    },
    {
      id: '36',
      projectTitle: '🗺 Seoul wifi location map service',
      description:
        '밖에서 핸드폰 데이터가 떨어져가서 급하게 와이파이가 필요할때, 서울시의 와이파이가 설치된 곳의 위치 정보를 검색하고 확인 할 수 있으며,\n자신의 현재 위치를 검색하여 주변의 가까운 와이파이 위치를 확인합니다.',
      owner_name: '2minzy',
      directLink: 'https://github.com/2minzy/Seoulite',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
        {
          name: 'Styled-components',
        },
      ],
      thumbnail_url:
        'https://camo.githubusercontent.com/2d99d31b81b44e7770e2858658eaef3424879cd8c5f1ae6c4328751aa094345c/68747470733a2f2f696d616765732e76656c6f672e696f2f696d616765732f6262696f336f2f706f73742f36336364643736322d353632362d346266382d626539302d6261313839613535346131362f254531253834253932254531253835254141254531253834253836254531253835254137254531253836254142253230254531253834253830254531253835254235254531253834253835254531253835254139254531253836254138253230323032312d30312d3139253230254531253834253842254531253835254139254531253834253843254531253835254135254531253836254142253230342e30342e33352e676966',
      hitCount: 1023,
      createdAt: '2021-09-10T07:54:36.417Z',
      reactions: [],
      comments: [],
    },
    {
      id: '37',
      projectTitle: 'Elliotable: iOS-based timetable library',
      description:
        'Elliotable은 간단하게 대한민국 대학교 시간표를 누구나 손쉽게 구현할 수 있도록 만들어진 라이브러리입니다.\n\n본 라이브러리는 시간표의 시작 시각과 종료 시각을 자동으로 계산하여 적용합니다.',
      owner_name: 'TaeinKim',
      directLink: 'https://github.com/della-padula/Elliotable',
      tech_stacks: [
        {
          name: 'Swift',
        },
        {
          name: 'Ruby',
        },
      ],
      thumbnail_url: 'https://github.com/della-padula/Elliotable/raw/master/screenshot_1.png',
      hitCount: 499,
      createdAt: '2021-09-10T07:54:39.324Z',
      reactions: [
        {
          id: '290',
        },
      ],
      comments: [],
    },
    {
      id: '38',
      projectTitle: '[Bletcher-Mix 👩🏻‍🎨] NST 알고리즘을 이용한 이미지 합성 서버 ',
      description:
        '인공지능 예술 웹 서비스 Bletcher Project의 AI Repository 입니다. Django로 이미지 합성 서버를 구현하였으며 Oracle Cloud에 배포되어 있습니다.\n\n👏 우리는 bletcher-ml 저장소를 지나와 100여개의 commit과 8개의 issue를 통한 많은 토의 끝에 배포되었습니다!!',
      owner_name: 'Bletcher-Project',
      directLink: 'https://github.com/Bletcher-Project/bletcher_mix',
      tech_stacks: [
        {
          name: 'Django',
        },
        {
          name: 'Python',
        },
        {
          name: 'Cloudinary',
        },
        {
          name: 'Heroku',
        },
        {
          name: 'Oracle Cloud',
        },
      ],
      thumbnail_url: 'https://github.com/Bletcher-Project/bletcher_mix/raw/main/README_image/nst_example.jpeg',
      hitCount: 750,
      createdAt: '2021-09-10T07:54:42.356Z',
      reactions: [
        {
          id: '120',
        },
      ],
      comments: [],
    },
    {
      id: '39',
      projectTitle: ' 👩🏻‍🎨[BE] AI 예술 웹 서비스 Bletcher',
      description:
        '🎨 Blend + 👩🏻‍🎨 Sketcher\n사용자들은 자유롭게 자신의 예술 작품을 공유할 수 있다. 또한 이 서비스를 통해 새로운 예술 작품을 탄생시킬 수도 있다.\n\nBletcher는 blend와 sketcher를 합친 이름이다. 우리의 서비스는 사용자(Sketcher)들의 표현을 섞어(Blend) 인공지능 예술로서 새로운 예술 작품을 그려주는 Bletcher이다.',
      owner_name: 'Bletcher-Project',
      directLink: 'https://github.com/Bletcher-Project/bletcher-back',
      tech_stacks: [
        {
          name: 'Nodejs',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'Express',
        },
        {
          name: 'Cloudinary',
        },
        {
          name: 'Heroku',
        },
        {
          name: 'Sequelize',
        },
        {
          name: 'MariaDB',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/22493971/110477817-f8551d00-8126-11eb-8fad-191ceb4846f9.jpg',
      hitCount: 575,
      createdAt: '2021-09-10T07:54:45.928Z',
      reactions: [
        {
          id: '118',
        },
        {
          id: '306',
        },
      ],
      comments: [],
    },
    {
      id: '40',
      projectTitle: '[FE] AI 예술 웹 서비스 Bletcher👩🏻‍🎨',
      description:
        '🎨 Blend + 👩🏻‍🎨 Sketcher\n사용자들은 자유롭게 자신의 예술 작품을 공유할 수 있다. 또한 이 서비스를 통해 새로운 예술 작품을 탄생시킬 수도 있다.\n\nBletcher는 blend와 sketcher를 합친 이름이다. 우리의 서비스는 사용자(Sketcher)들의 표현을 섞어(Blend) 인공지능 예술로서 새로운 예술 작품을 그려주는 Bletcher이다.',
      owner_name: 'Bletcher-Project',
      directLink: 'https://github.com/Bletcher-Project/bletcher-front',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'SCSS',
        },
        {
          name: 'Prop-types',
        },
        {
          name: 'Reactstrap',
        },
        {
          name: 'Material-ui',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/22493971/113881927-d61eef80-97f7-11eb-9d80-c8a33fdf224f.jpg',
      hitCount: 760,
      createdAt: '2021-09-10T07:54:49.316Z',
      reactions: [
        {
          id: '116',
        },
        {
          id: '119',
        },
      ],
      comments: [],
    },
    {
      id: '41',
      projectTitle: '🔷[풀스택] 코드블루 :: 의학지식 Q&A - 지식교류서비스',
      description:
        '코드블루는 건강의학지식기반 지식교류서비스 입니다.\n코드블루에서는 사용자가 올린 질문이나 궁금한 내용, 고민에 대해 지식을 주고받습니다.',
      owner_name: 'crazy-oung',
      directLink: 'https://github.com/crazy-oung/CodeBlue',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
      ],
      thumbnail_url: 'https://raw.githubusercontent.com/crazy-oung/CodeBlue/master/images/intro.PNG',
      hitCount: 1058,
      createdAt: '2021-09-17T06:39:03.345Z',
      reactions: [
        {
          id: '125',
        },
        {
          id: '126',
        },
        {
          id: '133',
        },
      ],
      comments: [
        {
          id: '29',
        },
      ],
    },
    {
      id: '42',
      projectTitle: "카페메이트: '초코음료🍫가 맛있는' 맞춤 카페 찾기 웹",
      description: '사용자의 니즈에 맞는 카페 추천 웹사이트입니다. ',
      owner_name: 'sungeun101',
      directLink: 'https://github.com/sungeun101/cafemate',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'JPA',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
      ],
      thumbnail_url:
        'https://media.vlpt.us/images/couchcoding/post/9cd7ad0b-dc95-452b-b85f-f8869f2702b4/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-11%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2010.19.36.png',
      hitCount: 1386,
      createdAt: '2021-09-17T06:39:11.090Z',
      reactions: [
        {
          id: '129',
        },
        {
          id: '304',
        },
      ],
      comments: [],
    },
    {
      id: '43',
      projectTitle: '[BE] 💎Harupiece💎-건강 챌린지 플랫폼, 하루조각',
      description:
        '건강 챌린지를 통해 원하는 목표에 한 발자국 더 다가갈 수 있습니다! 자신이 원하는 목표에 맞는 챌린지를 신청하고, 서로를 응원하다보면 어느새 목표 달성!',
      owner_name: 'Harupiece',
      directLink: 'https://github.com/Harupiece/server',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'Gradle',
        },
        {
          name: 'Jenkins',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/133734466-cb98a436-0d82-4575-bc00-e139ece82951.png',
      hitCount: 1013,
      createdAt: '2021-09-17T06:39:29.319Z',
      reactions: [],
      comments: [],
    },
    {
      id: '44',
      projectTitle: '[FE] 💎Harupiece💎-건강 챌린지 플랫폼, 하루조각',
      description:
        '건강 챌린지를 통해 원하는 목표에 한 발자국 더 다가갈 수 있습니다! 자신이 원하는 목표에 맞는 챌린지를 신청하고, 서로를 응원하다보면 어느새 목표 달성!',
      owner_name: 'Harupiece',
      directLink: 'https://github.com/Harupiece/client',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'Axios',
        },
        {
          name: 'Styled-components',
        },
      ],
      thumbnail_url:
        'https://camo.githubusercontent.com/5a92ed3755e8e8728b3947e9162882c6071c402492ccfdab677d96ed0a145f33/68747470733a2f2f692e6962622e636f2f4c6b76797666472f696d6167652e676966',
      hitCount: 876,
      createdAt: '2021-09-17T06:39:32.641Z',
      reactions: [
        {
          id: '122',
        },
        {
          id: '127',
        },
      ],
      comments: [],
    },
    {
      id: '45',
      projectTitle: '📚[풀스택]책무리 프로젝트 (Chakmuri Project)',
      description: '독서모임을 만들어 사람들을 모집하거나, 다른 사람들이 운영하는 독서모임에 가입할 수 있는 웹사이트',
      owner_name: 'chakmuri',
      directLink: 'https://github.com/chakmuri/chakmuri',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'React',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'JPA',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'Ant design',
        },
        {
          name: 'Styled-components',
        },
        {
          name: 'Gradle',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/133743650-9207f2d7-f180-4227-84d6-bac164769044.png',
      hitCount: 2739,
      createdAt: '2021-09-17T06:39:36.226Z',
      reactions: [
        {
          id: '128',
        },
        {
          id: '131',
        },
        {
          id: '132',
        },
        {
          id: '239',
        },
        {
          id: '248',
        },
        {
          id: '249',
        },
      ],
      comments: [],
    },
    {
      id: '46',
      projectTitle: '[풀스택]🐇 토닥토닥 (Todak-Todak) /사회적 연대 강화를 위한 지역 기반 커뮤니티 서비스',
      description:
        '  동병상련의 아픔을 가진 유저들의 사회적 연대 강화를 목적으로 하는 지역 기반 커뮤니티 서비스 / 사회적 연결망의 강화가 의료 사각지대를 해소하는 데 도움을 줄 수 있다.',
      owner_name: 'JeongHwan-dev',
      directLink: 'https://github.com/JeongHwan-dev/todak-todak',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Python',
        },
        {
          name: 'Bootstrap',
        },
        {
          name: 'Flask',
        },
        {
          name: 'Material-ui',
        },
        {
          name: 'Pandas',
        },
        {
          name: 'Scikit learn',
        },
        {
          name: 'Neo4j',
        },
        {
          name: 'D3.js',
        },
        {
          name: 'Folium',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/134624457-fadbbf0a-f218-4269-8a91-e00e97de69ee.png',
      hitCount: 989,
      createdAt: '2021-09-24T06:46:24.322Z',
      reactions: [
        {
          id: '142',
        },
        {
          id: '169',
        },
      ],
      comments: [],
    },
    {
      id: '47',
      projectTitle: '[모바일]🥾 발자취 (Project Footprint)',
      description:
        "발자취는 BLE(Bluetooth Low Energy) 핵심 기술인 'Beacon' 모듈을 활용하여, 사용자가 특정 장소를 방문하면, 이를 저장하여 자동으로 하루 일과를 기록해주는 서비스입니다",
      owner_name: 'H43RO',
      directLink: 'https://github.com/H43RO/Footprint',
      tech_stacks: [
        {
          name: 'Django',
        },
        {
          name: 'Python',
        },
        {
          name: 'Kotlin',
        },
        {
          name: 'Raspberry Pi',
        },
        {
          name: 'Arduino UNO',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/134627706-b7fe692d-1a1a-4a9f-be3e-6a05873851ca.png',
      hitCount: 1228,
      createdAt: '2021-09-24T06:46:28.773Z',
      reactions: [
        {
          id: '136',
        },
        {
          id: '149',
        },
        {
          id: '150',
        },
        {
          id: '153',
        },
        {
          id: '208',
        },
      ],
      comments: [],
    },
    {
      id: '48',
      projectTitle: 'What is Your Tag? 🏷',
      description: 'What is Your Tag? 🏷 - 특정 키워드로 unsplash 랜덤 이미지 출력한다.  ',
      owner_name: 'wonkooklee',
      directLink: 'https://github.com/wonkooklee/what_is_your_tag',
      tech_stacks: [
        {
          name: 'JavaScript',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
      ],
      thumbnail_url:
        'https://camo.githubusercontent.com/c9b45174271a5b13768c5d9811b8e1b73ac48e111a5c897f3f5252f071e8393d/68747470733a2f2f696d616765732e76656c6f672e696f2f696d616765732f6f6e656f6f6b2f706f73742f32346435636637362d663862342d346333642d393033632d6362613762396237653735652f657a6769662d322d3339626339626531646166302e676966',
      hitCount: 695,
      createdAt: '2021-09-24T06:46:54.174Z',
      reactions: [
        {
          id: '301',
        },
      ],
      comments: [],
    },
    {
      id: '49',
      projectTitle: '[FE] 🎨Colfume🔎',
      description: 'Find Your Colfume, 컬퓸에서 당신의 색을 찾아보세요!',
      owner_name: 'mnxmnz',
      directLink: 'https://github.com/mnxmnz/colfume-frontend',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Next.js',
        },
        {
          name: 'Styled-components',
        },
        {
          name: 'Recoil',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/55784772/125957379-e85b0222-71e3-4922-abf3-1373502c7769.png',
      hitCount: 1702,
      createdAt: '2021-09-24T06:46:57.174Z',
      reactions: [
        {
          id: '137',
        },
        {
          id: '140',
        },
        {
          id: '141',
        },
        {
          id: '143',
        },
        {
          id: '144',
        },
        {
          id: '152',
        },
        {
          id: '155',
        },
        {
          id: '156',
        },
        {
          id: '157',
        },
        {
          id: '158',
        },
        {
          id: '159',
        },
        {
          id: '280',
        },
      ],
      comments: [],
    },
    {
      id: '50',
      projectTitle: '[BE] Find Your Colfume',
      description: 'Find Your Colfume, 컬퓸에서 당신의 색을 찾아보세요!',
      owner_name: 'colfume',
      directLink: 'https://github.com/colfume/back-2the-fumeture',
      tech_stacks: [
        {
          name: 'Nodejs',
        },
        {
          name: 'Typescript',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/68318945/124396500-ee45d280-dd44-11eb-9795-27ae3256684e.png',
      hitCount: 855,
      createdAt: '2021-09-24T06:46:59.861Z',
      reactions: [
        {
          id: '138',
        },
        {
          id: '139',
        },
        {
          id: '151',
        },
      ],
      comments: [],
    },
    {
      id: '51',
      projectTitle: '[풀스택] 두굿모닝 (Do Good morning)',
      description:
        '서로의 아침 창밖 풍경을 공유해 두근거리는 아침 그리고 굿모닝을 실천하게 해주는 두굿모닝 서비스입니다.\n  세계 각국에서 업로드하는 창밖 풍경 사진들을 통해 세계 여행을 즐기실 수 있습니다.',
      owner_name: 'do-good-morning',
      directLink: 'https://github.com/do-good-morning/do-good-morning',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Python',
        },
        {
          name: 'Flask',
        },
        {
          name: 'Swiper',
        },
      ],
      thumbnail_url: 'https://github.com/do-good-morning/do-good-morning/raw/master/images/main-page-section2.gif',
      hitCount: 1410,
      createdAt: '2021-10-01T07:59:04.315Z',
      reactions: [
        {
          id: '168',
        },
        {
          id: '217',
        },
        {
          id: '236',
        },
        {
          id: '242',
        },
        {
          id: '243',
        },
      ],
      comments: [],
    },
    {
      id: '52',
      projectTitle: '[FE] 내 여행 스타일 성향 테스트',
      description: '우리다운 여행을 만들어요. 여행 성향 테스트로 여행 스타일을 파악하고 함께 여행을 만들어가세요',
      owner_name: 'TeamDooRiBon',
      directLink: 'https://github.com/TeamDooRiBon/DooRi-Web',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'Styled-components',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/135583651-50c3a870-f7df-4adc-b06e-773879ded6a8.png',
      hitCount: 1441,
      createdAt: '2021-10-01T07:59:07.099Z',
      reactions: [
        {
          id: '161',
        },
        {
          id: '165',
        },
        {
          id: '170',
        },
        {
          id: '174',
        },
        {
          id: '181',
        },
        {
          id: '185',
        },
        {
          id: '238',
        },
      ],
      comments: [],
    },
    {
      id: '53',
      projectTitle: '[BE]✈️ 두리번- 작은 움직임이 만드는 우리다운 여행 ',
      description:
        '두리번 의 핵심 기능은 다음과 같습니다.\n\n그룹성향파악, 위시리스트, 여행보드, 일정관리\n두리번을 통해 함께 여행하는 사람들의 성향을 파악하고, 즐거운 여행을 만들어 가세요.\n',
      owner_name: 'TeamDooRiBon',
      directLink: 'https://github.com/TeamDooRiBon/DooRi-Server',
      tech_stacks: [
        {
          name: 'Nodejs',
        },
        {
          name: 'Express',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'MongoDB',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/20807197/124567491-0457ae00-de7f-11eb-8a40-b67ee7382f9c.png',
      hitCount: 1057,
      createdAt: '2021-10-01T07:59:08.995Z',
      reactions: [
        {
          id: '163',
        },
        {
          id: '164',
        },
        {
          id: '166',
        },
        {
          id: '173',
        },
        {
          id: '179',
        },
        {
          id: '184',
        },
        {
          id: '188',
        },
        {
          id: '191',
        },
      ],
      comments: [],
    },
    {
      id: '54',
      projectTitle: '[IOS] 🧳두리번- 작은 움직임이 만드는 우리다운 여행 ',
      description: '두리번을 통해 함께 여행하는 사람들의 성향을 파악하고, 즐거운 여행을 만들어 가세요.\n',
      owner_name: 'TeamDooRiBon',
      directLink: 'https://github.com/TeamDooRiBon/DooRi-iOS',
      tech_stacks: [
        {
          name: 'Kingfisher',
        },
        {
          name: 'IOS',
        },
        {
          name: 'Xcode',
        },
        {
          name: 'FSCalendar',
        },
        {
          name: 'SnapKit',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/69389288/125818111-54d73816-fb89-43a8-8648-0e44fc837aa5.png',
      hitCount: 1094,
      createdAt: '2021-10-01T07:59:11.324Z',
      reactions: [
        {
          id: '160',
        },
        {
          id: '171',
        },
        {
          id: '175',
        },
        {
          id: '177',
        },
        {
          id: '178',
        },
        {
          id: '180',
        },
        {
          id: '183',
        },
        {
          id: '187',
        },
        {
          id: '190',
        },
        {
          id: '193',
        },
        {
          id: '196',
        },
      ],
      comments: [],
    },
    {
      id: '55',
      projectTitle: '[Android] DOORIBON 👀 작은 움직임이 만드는 우리다운 여행',
      description:
        '두리번👀은 여행을 계획하고 일정을 정리할 수 있을 뿐만 아니라 여행 성향 테스트를 통해 자신의 여행 성향이 어떠한지 파악할 수 있고 함께 여행가는 사람들과 이를 공유할 수 있는 여행 서비스입니다.',
      owner_name: 'TeamDooRiBon',
      directLink: 'https://github.com/TeamDooRiBon/DooRi-Android',
      tech_stacks: [
        {
          name: 'Kotlin',
        },
        {
          name: 'Aos',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/20807197/125838695-6697af66-35af-4a90-ad84-2a91e87cc69e.png',
      hitCount: 1304,
      createdAt: '2021-10-01T07:59:13.682Z',
      reactions: [
        {
          id: '162',
        },
        {
          id: '167',
        },
        {
          id: '172',
        },
        {
          id: '176',
        },
        {
          id: '182',
        },
        {
          id: '186',
        },
        {
          id: '189',
        },
        {
          id: '192',
        },
        {
          id: '195',
        },
        {
          id: '197',
        },
        {
          id: '218',
        },
        {
          id: '275',
        },
      ],
      comments: [],
    },
    {
      id: '56',
      projectTitle: '[풀스택] 🐳 조직 내에서 중고 거래를! 직고래',
      description:
        '당신이 속한 그룹 어디든, 당신이 원하는 무엇이든 사고 팔 수 있는 조직 중고 거래 서비스, 직고래입니다.\n\n아무리 사소한 물건이라도 직고래를 이용하면 문제없어요.\n\n조직 내에서 가까운 사람과 거래하기 때문에 가벼운 마음으로, 가까운 거리에서, 안전하게 거래를 할 수 있답니다.',
      owner_name: 'jnsorn',
      directLink: 'https://github.com/woowacourse-teams/2020-seller-lee-company',
      tech_stacks: [
        {
          name: 'Spring Boot',
        },
        {
          name: 'Spring Security',
        },
        {
          name: 'JPA',
        },
        {
          name: 'Axios',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'React-Native',
        },
        {
          name: 'Expo',
        },
      ],
      thumbnail_url: 'https://github.com/jnsorn/2020-seller-lee-company/raw/develop/images/graphic.jpg',
      hitCount: 1683,
      createdAt: '2021-10-08T04:19:37.338Z',
      reactions: [
        {
          id: '222',
        },
      ],
      comments: [],
    },
    {
      id: '57',
      projectTitle: '🍽 1인의 만찬 : 1인 가구를 위한 마감 음식 패키징 서비스 🍽',
      description:
        '1인의 만찬\n1인가구를 위한 마감음식 패키징 서비스\n1인의 만찬은 자영업자와 1인 가우 소비자들을 위한 마감 음식 패키징 서비스입니다.',
      owner_name: 'moosongsong',
      directLink: 'https://github.com/moosongsong/project-dinner41-spring',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'Spring',
        },
        {
          name: 'Jsp',
        },
      ],
      thumbnail_url:
        'https://github.com/moosongsong/project-dinner41-spring/raw/master/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%82%B0%EC%B6%9C%EB%AC%BC/readmeImage/1%EC%9D%B8%EC%9D%98%EB%A7%8C%EC%B0%AC.png',
      hitCount: 1833,
      createdAt: '2021-10-08T04:19:51.009Z',
      reactions: [
        {
          id: '283',
        },
      ],
      comments: [],
    },
    {
      id: '58',
      projectTitle: 'SHARE MARKET-개인간 물품을 빌려주고 빌려쓰는 웹 기반 C2C 플랫폼',
      description:
        '본 프로젝트는 학부 캡스톤디자인에서 진행한 프로젝트로 **개인간 물품을 빌려주고 빌려쓰는 웹 기반 C2C 플랫폼**입니다. \n누구나 지금당장은 쓰지 않지만 언젠가는 쓸 것 같아 팔지못하고 있거나, 사용하는 날보다 안하는 날들이 많은 물건들을 가지고 있습니다. 또한 잠깐 쓸 것인데 사기에는 애매한 물건들도 많습니다. 쉐어마켓은 이러한 사실에 착안하여 출발한 웹 프로젝트입니다.',
      owner_name: 'esoongan',
      directLink: 'https://github.com/esoongan/share-market',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'JPA',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/68773492/128124512-8138d4de-66ae-4978-beef-e05925b49d9e.gif',
      hitCount: 1152,
      createdAt: '2021-10-08T04:19:25.139Z',
      reactions: [],
      comments: [
        {
          id: '32',
        },
      ],
    },
    {
      id: '59',
      projectTitle: '🍸 좋은 술을 고민 없이, 칵테일 추천 서비스 "칵테일픽"',
      description:
        '칵테일 픽은 칵테일 정보 제공, 추천 서비스입니다. "좋은 술을, 고민 없이"라는 모토를 가지고 개발하고 있습니다.',
      owner_name: 'toneyparky',
      directLink: 'https://github.com/woowacourse-teams/2020-6rinkers',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'React',
        },
        {
          name: 'Spring Boot',
        },
      ],
      thumbnail_url:
        'https://github.com/woowacourse-teams/2020-6rinkers/raw/dev/front/public/image/logo/CocktailPick_logo_FullName_white.png',
      hitCount: 1562,
      createdAt: '2021-10-08T04:19:55.109Z',
      reactions: [
        {
          id: '198',
        },
      ],
      comments: [],
    },
    {
      id: '60',
      projectTitle: '🎨 ARTA : 사용자 맞춤형 온라인 전시회 플랫폼 🎨',
      description:
        "ARTA는 '예술'의 영문인 'art'와, '~로 부터'라는 뜻을 가진 영문 단어 'a'를 합하여 만든 합성어로 '예술로부터'라는 뜻을 가지고 있습니다.",
      owner_name: 'moosongsong',
      directLink: 'https://github.com/moosongsong/project-arta-django',
      tech_stacks: [
        {
          name: 'Django',
        },
        {
          name: 'Python',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
      ],
      thumbnail_url:
        'https://github.com/moosongsong/project-arta-django/raw/develop/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%82%B0%EC%B6%9C%EB%AC%BC_%EB%B0%8F_%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/readme_image/%EB%82%982_21%EC%BA%A1%EC%8A%A4%ED%86%A42_%EC%B5%9C%EC%A2%85%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C(ARTA)_page-0001.jpg',
      hitCount: 909,
      createdAt: '2021-10-08T04:19:57.663Z',
      reactions: [],
      comments: [],
    },
    {
      id: '61',
      projectTitle: '[FE] 😊 주접 생성기',
      description: '주접떠는 사이트입니다. 여러분의 주접을 추가해보세요.🥸',
      owner_name: 'jong-hui',
      directLink: 'https://github.com/jong-hui/JuJeob',
      tech_stacks: [
        {
          name: 'Next.js',
        },
        {
          name: 'Styled-components',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'Mobx',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/42797995/98429243-db60fc80-20e8-11eb-9d8f-1094b63362ac.gif',
      hitCount: 1964,
      createdAt: '2021-10-16T07:40:30.483Z',
      reactions: [
        {
          id: '282',
        },
        {
          id: '284',
        },
        {
          id: '286',
        },
      ],
      comments: [],
    },
    {
      id: '62',
      projectTitle: '[확장앱] 할 일을 다하면 고래가 자라나는 앱',
      description: 'To do 리스트에 간편하게 목표를 추가하고 달성해보세요. 확장 앱과 함께 고래가 점점 자라나요!',
      owner_name: 'zion830',
      directLink: 'https://github.com/zion830/everyday-whale',
      tech_stacks: [
        {
          name: 'JavaScript',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
      ],
      thumbnail_url:
        'https://whale-store.pstatic.net/20181210_152/1544428173856CXENH_JPEG/%BF%FE%C0%CF_%BD%BA%C5%A9%B8%B0%BC%A602.jpg',
      hitCount: 3259,
      createdAt: '2021-10-16T08:03:22.393Z',
      reactions: [
        {
          id: '241',
        },
        {
          id: '314',
        },
      ],
      comments: [
        {
          id: '36',
        },
      ],
    },
    {
      id: '63',
      projectTitle: '[풀스택] 💉우리들의 백신 접종 후기 공유 플랫폼_CVI',
      description:
        '코로나19 백신 접종 후기를 남기다! 우리는 Team CVI 입니다.\nCVI 는 코로나19 백신 정보를 제공해줘요.\nCVI 에서는 백신 후기를 남길 수 있어요.\n부작용이 걱정되신다구요? 다른 사람들의 후기를 보러 가볼까요? :)',
      owner_name: 'taehee-kim-dev',
      directLink: 'https://github.com/woowacourse-teams/2021-cvi',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'JPA',
        },
        {
          name: 'Oauth2',
        },
        {
          name: 'Webpack',
        },
        {
          name: 'Babel',
        },
        {
          name: 'Logback',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/53412998/135582980-53157888-c54d-4313-bff5-e06ccd01274f.gif',
      hitCount: 1401,
      createdAt: '2021-10-18T02:15:16.849Z',
      reactions: [],
      comments: [],
    },
    {
      id: '64',
      projectTitle: '[IOS] 🐟가슴속 3천원🐟',
      description: '🐟가슴속 3천원🐟은 전국 붕어빵 지도로 시작하여 전국 길거리 음식점 정복을 꿈꾸는 프로젝트입니다. ',
      owner_name: 'Hyunsik-Yoo',
      directLink: 'https://github.com/depromeet/3dollars-in-my-pocket-ios',
      tech_stacks: [
        {
          name: 'Swift',
        },
        {
          name: 'SnapKit',
        },
        {
          name: 'RxSwift',
        },
        {
          name: 'MVVM',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/7058293/110066182-30213500-7db4-11eb-881e-fa3ea0537b7a.png',
      hitCount: 1016,
      createdAt: '2021-10-19T07:50:33.638Z',
      reactions: [],
      comments: [
        {
          id: '44',
        },
      ],
    },
    {
      id: '65',
      projectTitle: '[BE] 🚗카핑 차박라이프를 공유',
      description: '다채롭고 지속가능한 차박라이프를 공유하다',
      owner_name: 'TourKakao-Carping',
      directLink: 'https://github.com/TourKakao-Carping/Carping-Backend',
      tech_stacks: [
        {
          name: 'Django',
        },
        {
          name: 'Python',
        },
        {
          name: 'Docker',
        },
      ],
      thumbnail_url: 'https://github.com/TourKakao-Carping/Carping-Backend/raw/main/img/0001.png',
      hitCount: 1242,
      createdAt: '2021-10-20T01:54:55.052Z',
      reactions: [
        {
          id: '210',
        },
        {
          id: '211',
        },
        {
          id: '214',
        },
        {
          id: '215',
        },
        {
          id: '221',
        },
        {
          id: '237',
        },
      ],
      comments: [],
    },
    {
      id: '66',
      projectTitle: '[BE] Cherish 당신의 소중한 사람들을 위한 연락관리 서비스',
      description: '지인들에게 연락을 통해 식물이 자라나도록 해보세요',
      owner_name: 'TeamCherish',
      directLink: 'https://github.com/TeamCherish/CherishServer',
      tech_stacks: [
        {
          name: 'Nodejs',
        },
        {
          name: 'Express',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/72644361/104651996-c792d180-56fb-11eb-867c-5b55dbe21833.png',
      hitCount: 580,
      createdAt: '2021-10-21T06:50:37.805Z',
      reactions: [],
      comments: [],
    },
    {
      id: '67',
      projectTitle: '[IOS] Cherish 당신의 소중한 사람들을 위한 연락관리 서비스',
      description: '지인들에게 연락을 통해 식물이 자라나도록 해보세요',
      owner_name: 'TeamCherish',
      directLink: 'https://github.com/TeamCherish/Cherish-iOS',
      tech_stacks: [
        {
          name: 'Swift',
        },
        {
          name: 'IOS',
        },
        {
          name: 'Xcode',
        },
        {
          name: 'Sopt',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/42789819/115145682-c623cd00-a08d-11eb-9b94-f1369b7a7c56.png',
      hitCount: 1011,
      createdAt: '2021-10-21T06:53:28.960Z',
      reactions: [
        {
          id: '212',
        },
      ],
      comments: [],
    },
    {
      id: '68',
      projectTitle: '[FE] 🧪 kpopGirlGroup + MBTI ',
      description:
        'MBTI와 Kpop 걸그룹을 매칭한 MBTI 테스트 서비스. 나를 더 잘 묘사하는 K팝 노래가사를 골라 나의 MBTI를 테스트하세요!\n',
      owner_name: 'Jungho Choi',
      directLink: 'https://github.com/9rganizedchaos/be_MBTIous-client',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'Styled-components',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'Three.js',
        },
        {
          name: 'Chart.js',
        },
        {
          name: 'Framer',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/75521675/133390834-20db2e50-bcf2-4b0e-a211-bcd78a71df76.gif',
      hitCount: 1218,
      createdAt: '2021-10-22T01:52:27.061Z',
      reactions: [
        {
          id: '232',
        },
        {
          id: '240',
        },
        {
          id: '273',
        },
      ],
      comments: [],
    },
    {
      id: '69',
      projectTitle: '[BE] ❣️가슴속 3천원🐟',
      description: '🐟가슴속 3천원🐟은 전국 붕어빵 지도로 시작하여 전국 길거리 음식점 정복을 꿈꾸는 프로젝트입니다.',
      owner_name: 'Seungho Kang',
      directLink: 'https://github.com/depromeet/3dollars-in-my-pocket-backend',
      tech_stacks: [
        {
          name: 'Spring Boot',
        },
        {
          name: 'Spring Batch',
        },
        {
          name: 'JPA',
        },
        {
          name: 'Gradle',
        },
      ],
      thumbnail_url: 'https://github.com/depromeet/3dollars-in-my-pocket-backend/raw/develop/images/logo.png',
      hitCount: 1388,
      createdAt: '2021-10-22T04:47:24.968Z',
      reactions: [
        {
          id: '216',
        },
        {
          id: '223',
        },
      ],
      comments: [],
    },
    {
      id: '70',
      projectTitle: '[Android] 👩‍🦯 시각 장애인을 위한 딥 러닝 기반의 스마트 지팡이',
      description:
        '기존 보행 보조장치들의 장점만을 한데 모아 시각 장애인들이 더욱 안전하게 보행할 수 있도록 도와주는 지팡이 형태의 보행 보조장치입니다. 다양한 청각 및 촉각 피드백을 제공하고, 센서와 딥 러닝 모델이 시각 장애인의 눈을 대신하여 시각 장애인들의 안전성을 신장합니다. 지팡이와 목에 거는 스마트폰이 유기적으로 함께 동작합니다.',
      owner_name: 'Team-JG',
      directLink: 'https://github.com/Team-JG/SmartCane-Android',
      tech_stacks: [
        {
          name: 'Kotlin',
        },
        {
          name: 'MVVM',
        },
        {
          name: 'DataBinding',
        },
        {
          name: 'JetPack',
        },
        {
          name: 'ViewModel',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/138811798-b236e2ae-0139-4194-8df4-3b37f45f9ae0.png',
      hitCount: 634,
      createdAt: '2021-10-26T05:10:02.200Z',
      reactions: [],
      comments: [],
    },
    {
      id: '71',
      projectTitle: '[BE] 👨‍🦯시각 장애인을 위한 딥 러닝 기반의 스마트 지팡이',
      description:
        '기존 보행 보조장치들의 장점만을 한데 모아 시각 장애인들이 더욱 안전하게 보행할 수 있도록 도와주는 지팡이 형태의 보행 보조장치입니다. 다양한 청각 및 촉각 피드백을 제공하고, 센서와 딥 러닝 모델이 시각 장애인의 눈을 대신하여 시각 장애인들의 안전성을 신장합니다. 지팡이와 목에 거는 스마트폰이 유기적으로 함께 동작합니다.',
      owner_name: 'Team-JG',
      directLink: 'https://github.com/Team-JG/SmartCane-Back-end',
      tech_stacks: [
        {
          name: 'Nginx',
        },
        {
          name: 'Python',
        },
        {
          name: 'Docker',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/138811970-e5ca04e3-5ad0-42fa-ad96-111e38b03cce.png',
      hitCount: 519,
      createdAt: '2021-10-26T05:09:59.858Z',
      reactions: [],
      comments: [],
    },
    {
      id: '72',
      projectTitle: '[DL] 👨‍🦯 시각 장애인을 위한 딥 러닝 기반의 스마트 지팡이',
      description: '시각 장애인을 위한 스마트 지팡이에 활용될 딥러닝 모델 (DL Model Repo)',
      owner_name: 'Team-JG',
      directLink: 'https://github.com/Team-JG/SmartCane-DL-Model',
      tech_stacks: [
        {
          name: 'Python',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/138811974-25d2738d-b718-4734-8de5-a4cc0a23aad9.png',
      hitCount: 504,
      createdAt: '2021-10-26T05:09:57.487Z',
      reactions: [],
      comments: [],
    },
    {
      id: '73',
      projectTitle: '[DL] 🎑 인도 보행 구역 segmentation 모델',
      description: '인도 보행 구역 이미지 분할 모델입니다. ',
      owner_name: 'JunHyeok96',
      directLink: 'https://github.com/JunHyeok96/Road-Segmentation',
      tech_stacks: [
        {
          name: 'Tensorflow',
        },
        {
          name: 'Opencv-python',
        },
        {
          name: 'Numpy',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/52908154/79999901-73094f80-84f7-11ea-8700-f9777b42c9ad.gif',
      hitCount: 839,
      createdAt: '2021-10-29T00:55:19.357Z',
      reactions: [
        {
          id: '256',
        },
        {
          id: '292',
        },
      ],
      comments: [],
    },
    {
      id: '74',
      projectTitle: '[풀스택] 📸아로새김 디자털 기억보관소',
      description:
        '아로새김 은 카카오맵과 W3W 주소 체계를 함께 사용하여 지도상에 나만의 기억을 남길 수 있는 경험 을 제공하는 서비스입니다.',
      owner_name: 'soulgchoi',
      directLink: 'https://github.com/soulgchoi/Arosaegim',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'JPA',
        },
        {
          name: 'Axios',
        },
        {
          name: 'Styled-components',
        },
      ],
      thumbnail_url:
        'https://camo.githubusercontent.com/5d554e36be34eda4d7684f42a136c7015bce0503ae5ec560e1863232b6c06312/687474703a2f2f696d672e796f75747562652e636f6d2f76692f374951745a7143687162552f302e6a7067',
      hitCount: 133,
      createdAt: '2021-12-23T13:02:58.893Z',
      reactions: [],
      comments: [],
    },
    {
      id: '75',
      projectTitle: '[풀스택]🔖 태그 기반의 북마크 관리 서비스',
      description:
        '"재미있는 글, 학습에 도움이 되는 글을 저장하다보니 북마크가 너무 많아져서 찾기 어려워😱"\n\n그런 당신을 위해 준비했습니다! 태그 기반의 북마크 관리 서비스 Taggle👍',
      owner_name: 'KS-KIM',
      directLink: 'https://github.com/woowacourse-teams/2020-taggle',
      tech_stacks: [
        {
          name: 'Vue.js',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'Spring Security',
        },
        {
          name: 'JPA',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'Vuetify',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/45934117/94068485-35a04980-fe2a-11ea-8b57-abd9bde30014.png',
      hitCount: 795,
      createdAt: '2021-11-02T06:41:48.813Z',
      reactions: [],
      comments: [],
    },
    {
      id: '76',
      projectTitle: '[FE] 🌟 ddongule-simple-portfolio',
      description: '🪜 Portfolio for Developers! Make your own portfolio Simple and Fast!',
      owner_name: 'Min Kyung Kang',
      directLink: 'https://github.com/ddongule/ddongule-simple-portfolio',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'SCSS',
        },
        {
          name: 'Cra',
        },
      ],
      thumbnail_url:
        'https://github.com/ddongule/ddongule-simple-portfolio/raw/main/public/readme/images/ddongule-simple-portfolio.png',
      hitCount: 399,
      createdAt: '2021-11-02T06:53:54.809Z',
      reactions: [
        {
          id: '227',
        },
      ],
      comments: [],
    },
    {
      id: '77',
      projectTitle: '[풀스택] 이거사면 내 평균 주식 단가는 얼마?',
      description: '🌟 Stockulator: Stock Calculator (Real Time!)',
      owner_name: 'ddongule',
      directLink: 'https://github.com/ddongule/stockulator',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'Express',
        },
        {
          name: 'SCSS',
        },
        {
          name: 'Snowpack',
        },
      ],
      thumbnail_url: 'https://github.com/ddongule/stockulator/raw/master/public/logo.png',
      hitCount: 826,
      createdAt: '2021-11-04T06:54:49.756Z',
      reactions: [
        {
          id: '257',
        },
      ],
      comments: [],
    },
    {
      id: '78',
      projectTitle: '[FE] 디지털 노마드들을 위한 위치 기반 주변 카페 알리미',
      description: '디자이너와 개발자 같은 디지털 노마드에게 딱 맞는 작업공간을 소개해주는 서비스',
      owner_name: 'Puterism',
      directLink: 'https://github.com/Puterism/working-space-front',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Mobx',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/140273001-50ef4465-4d8c-407c-8596-0760e1c80740.png',
      hitCount: 938,
      createdAt: '2021-11-04T07:23:13.882Z',
      reactions: [],
      comments: [],
    },
    {
      id: '79',
      projectTitle: '[FE] ⭕️🔺🟥 오징어게임-mini game',
      description:
        '오징어게임의 무궁화 꽃이 피었습니다 게임을 구현해보았습니다. Simple game based of on a popular Netfilx seires called "Squid Game".',
      owner_name: '0shuvo0',
      directLink: 'https://github.com/0shuvo0/squidgame',
      tech_stacks: [
        {
          name: 'JavaScript',
        },
        {
          name: 'Three.js',
        },
        {
          name: 'Game-development',
        },
      ],
      thumbnail_url: 'https://github.com/0shuvo0/squidgame/raw/main/img/preview.png',
      hitCount: 944,
      createdAt: '2021-11-05T08:39:10.205Z',
      reactions: [],
      comments: [],
    },
    {
      id: '80',
      projectTitle: 'MacOS 메뉴 기반 todo 애플리케이션',
      description: 'Todo application for mac',
      owner_name: 'choi-Jinwoo',
      directLink: 'https://github.com/choi-Jinwoo/soft-todo',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Electron',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/49791336/140241545-57a7518c-fa14-4b33-a0aa-f3e4a2de3e8e.png',
      hitCount: 651,
      createdAt: '2021-11-05T08:39:06.170Z',
      reactions: [
        {
          id: '226',
        },
        {
          id: '245',
        },
      ],
      comments: [],
    },
    {
      id: '81',
      projectTitle: '[풀스택]오픈 API를 활용한 코로나19 예방접종센터 조회',
      description: '공공 데이터 API를 활용해 코로나 예방접종센터 조회 페이지 구현',
      owner_name: 'katej927',
      directLink: 'https://github.com/katej927/COVID19_VaccinaitonCenter_Inquiry',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Nodejs',
        },
        {
          name: 'Styled-components',
        },
        {
          name: 'React Hooks',
        },
        {
          name: 'React-to-pdf',
        },
      ],
      thumbnail_url:
        'https://camo.githubusercontent.com/6472ca151a1db0cdba2fcdf0ca9b3e8bd8de5004c9e2d8877077c4c9d6a136c9/68747470733a2f2f696d67312e6461756d63646e2e6e65742f7468756d622f523132383078302f3f73636f64653d6d746973746f72793226666e616d653d6874747073253341253246253246626c6f672e6b616b616f63646e2e6e6574253246646e25324655717a5a6f25324662747134634e3476765033253246456d4865357a6b4545344e567039667a3861724d4c31253246696d672e676966',
      hitCount: 840,
      createdAt: '2021-11-08T08:24:23.362Z',
      reactions: [
        {
          id: '288',
        },
      ],
      comments: [],
    },
    {
      id: '82',
      projectTitle: '👭 Autoencoder를 사용한 딥페이크 영상 프로젝트',
      description: '👭 Autoencoder를 사용한 딥페이크 영상 제작',
      owner_name: 'JunHyeok96',
      directLink: 'https://github.com/JunHyeok96/DeepFake',
      tech_stacks: [
        {
          name: 'Python',
        },
        {
          name: 'Tensorflow',
        },
        {
          name: 'Jupyter Notebook',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/52908154/79148660-cc3ef800-7e00-11ea-94f4-17c062df5b63.png',
      hitCount: 840,
      createdAt: '2021-11-10T02:59:22.914Z',
      reactions: [
        {
          id: '255',
        },
      ],
      comments: [],
    },
    {
      id: '83',
      projectTitle: '[풀스택] 🌅새벽 : 당신의 마음, 새벽이 들어줄게요',
      description: '새벽은 감정 일기를 올리고, 서로 공감해줄 수 있는 익명 공유 다이어리에요.',
      owner_name: 'include42',
      directLink: 'https://github.com/woowacourse-teams/2020-saebyeok',
      tech_stacks: [
        {
          name: 'Nginx',
        },
        {
          name: 'Vue.js',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'Jenkins',
        },
        {
          name: 'Logback',
        },
        {
          name: 'PWA',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/141419624-f36ab018-0db8-4f87-8909-392ee39e4379.png',
      hitCount: 825,
      createdAt: '2021-11-12T06:27:00.688Z',
      reactions: [],
      comments: [],
    },
    {
      id: '84',
      projectTitle: '[FE] 맞춤형 온라인 기부 플랫폼, BINGO!',
      description:
        '사회단체 후원활동에 재미와 편리함을 더하다\n맞춤형 온라인 기부 플랫폼, BINGO!\nBINGO에서 사회적 가치를 구입하고,\n당신의 삶에 빙고를 완성하세요!\n\n"BRING IN NGO to your life, BINGO to your life!”',
      owner_name: 'tlsalswp1004',
      directLink: 'https://github.com/tlsalswp1004/BINGO-Front',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'Typescript',
        },
      ],
      thumbnail_url:
        'https://camo.githubusercontent.com/be794bac7a0331b3281cfb43a5022c2ddf5cd61da4cc43908329288fc9780ce9/68747470733a2f2f6966682e63632f672f4c79704f346c2e706e67',
      hitCount: 294,
      createdAt: '2021-11-12T06:32:15.250Z',
      reactions: [
        {
          id: '235',
        },
      ],
      comments: [],
    },
    {
      id: '85',
      projectTitle: '[BE]⚡ MUSINSA WATCHER! 무신사 스토어 가격 변동 파악 웹사이트',
      description: '⚡ 트래픽 증가에 대응하기 위한 간단한 서버 확장 구조, 무신사 스토어 가격 변동 파악 서비스 WATCHER!',
      owner_name: 'JunHyeok96',
      directLink: 'https://github.com/JunHyeok96/Musinsa-Watcher',
      tech_stacks: [
        {
          name: 'Python',
        },
        {
          name: 'Vue.js',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'Redis',
        },
        {
          name: 'Kubernetes',
        },
        {
          name: 'Github Actions',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/141425631-63bcb420-4d2e-441d-9e1d-da506a45b31f.png',
      hitCount: 1936,
      createdAt: '2021-11-12T07:13:11.439Z',
      reactions: [
        {
          id: '233',
        },
      ],
      comments: [],
    },
    {
      id: '86',
      projectTitle: 'TIL writing tool for programmer',
      description:
        '긱스 다이어리는 버전 제어 시스템이 있는 markdown 편집기예요. 프로그래머가 TIL(Today I Learned)을 쓸 수 있도록 도와줍니다.',
      owner_name: 'seokju-na',
      directLink: 'https://github.com/seokju-na/geeks-diary',
      tech_stacks: [
        {
          name: 'JavaScript',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'Electron',
        },
        {
          name: 'Angular',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/13250888/50562835-00e98600-0d5b-11e9-8d23-76b267a0fbf0.png',
      hitCount: 448,
      createdAt: '2021-11-17T02:08:30.179Z',
      reactions: [
        {
          id: '244',
        },
      ],
      comments: [],
    },
    {
      id: '87',
      projectTitle: '리액트 네이티브로 만든 Todo App',
      description: 'Animated ToDo app built with React Native and Reanimated v2',
      owner_name: 'craftzdog',
      directLink: 'https://github.com/craftzdog/react-native-animated-todo',
      tech_stacks: [
        {
          name: 'Typescript',
        },
        {
          name: 'React-Native',
        },
        {
          name: 'Expo',
        },
        {
          name: 'React Navigation',
        },
        {
          name: 'NativeBase',
        },
        {
          name: 'React Native Reanimated',
        },
        {
          name: 'React Native SVG',
        },
      ],
      thumbnail_url: 'https://github.com/craftzdog/react-native-animated-todo/raw/master/doc/thumb.jpg',
      hitCount: 541,
      createdAt: '2021-11-17T02:15:02.097Z',
      reactions: [
        {
          id: '299',
        },
      ],
      comments: [],
    },
    {
      id: '88',
      projectTitle: '[BE] 한 사람을 위해 마음을 전달하는 온라인 롤링페이퍼',
      description:
        '오프라인에 존재했던 롤링페이퍼 서비스를 온라인으로 옮겨왔습니다.\n\n친구들, 동료들과 함께 링크를 공유하여 한 사람을 위한 롤링페이퍼를 만들어보세요.',
      owner_name: 'jaeseongDev',
      directLink: 'https://github.com/Nexters/Rollingpaper_server',
      tech_stacks: [
        {
          name: 'Nodejs',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'MariaDB',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/38487811/90950455-85d36700-e48c-11ea-9b79-72b5dcb6c6d6.png',
      hitCount: 1051,
      createdAt: '2021-11-19T07:15:08.385Z',
      reactions: [],
      comments: [],
    },
    {
      id: '89',
      projectTitle: '백엔드 없는 태스크 플래너 플러터 앱',
      description:
        'Task Planner App is built in flutter. App design is based on Task Planner App designed by Purrweb UI. This app is static. I mean, This is a UI design. No backend.',
      owner_name: 'TheAlphaApp',
      directLink: 'https://github.com/koperasi-rlp1/koperasi-mobileApp',
      tech_stacks: [
        {
          name: 'Swift',
        },
        {
          name: 'Dart',
        },
        {
          name: 'Kotlin',
        },
      ],
      thumbnail_url:
        'https://cdn.dribbble.com/users/5031392/screenshots/10951333/media/3285fe010eea0fc9033264a781d5dba0.png',
      hitCount: 1127,
      createdAt: '2021-11-19T07:26:01.411Z',
      reactions: [],
      comments: [],
    },
    {
      id: '90',
      projectTitle: "아동 급식 카드 가맹점을 조회할 수 있는 앱 '드림트리'",
      description:
        "[제 12기 SW 마에스트로 해커톤 2등 수상작] / 편리하게 꿈나무 카드 (아동 급식 카드) 가맹점을 조회할 수 있는 앱 '드림트리'입니다.",
      owner_name: 'SOMA-Hackaton',
      directLink: 'https://github.com/SOMA-Hackaton/DreamTree-Android',
      tech_stacks: [
        {
          name: 'Kotlin',
        },
        {
          name: 'MVVM',
        },
        {
          name: 'DataBinding',
        },
        {
          name: 'AAC',
        },
        {
          name: 'Koin',
        },
        {
          name: 'Retrofit',
        },
        {
          name: 'RxJava',
        },
        {
          name: 'Okhttp',
        },
        {
          name: 'NaverMap',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/142584682-f8739599-0dd1-4c7d-b1c2-34beb0670477.png',
      hitCount: 901,
      createdAt: '2021-11-19T07:47:33.893Z',
      reactions: [
        {
          id: '246',
        },
      ],
      comments: [],
    },
    {
      id: '91',
      projectTitle: '리액트로 만든 픽셀 아트 CSS 생성기',
      description: 'React로 구동되는 픽셀 아트 애니메이션 및 드로잉 웹 앱입니다.',
      owner_name: 'jvalen',
      directLink: 'https://github.com/jvalen/pixel-art-react',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'JavaScript',
        },
      ],
      thumbnail_url: 'https://github.com/jvalen/pixel-art-react/raw/master/screenshots/tree-pixelartcss.png',
      hitCount: 648,
      createdAt: '2021-11-22T06:26:00.434Z',
      reactions: [
        {
          id: '287',
        },
      ],
      comments: [],
    },
    {
      id: '92',
      projectTitle: '🚩심플한 배너 생성기\u001c',
      description: 'A simple and clean banner generator - Banners on the go.',
      owner_name: 'liyasthomas',
      directLink: 'https://github.com/liyasthomas/banner',
      tech_stacks: [
        {
          name: 'JavaScript',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
      ],
      thumbnail_url: 'https://github.com/liyasthomas/banner/raw/master/icons/screely2.png',
      hitCount: 369,
      createdAt: '2021-11-24T05:48:47.299Z',
      reactions: [],
      comments: [],
    },
    {
      id: '93',
      projectTitle: '💻 [FE] 개발 스터디, 프로젝트 플랫폼',
      description: ' IT 현업자들을 위한 웹앱이며, 함께 목적 달성을 이루기 위한 사람들을 매칭 시켜주는 플랫폼입니다.',
      owner_name: 'MIC-TEAM',
      directLink: 'https://github.com/MIC-TEAM/wellseecoding-front',
      tech_stacks: [
        {
          name: 'Redux',
        },
        {
          name: 'Next.js',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'JWT',
        },
        {
          name: 'Emotion',
        },
        {
          name: 'Eslint',
        },
      ],
      thumbnail_url:
        'https://media.vlpt.us/images/junh0328/post/2dc006ff-938d-46c6-bed3-cf45f6c3267e/KakaoTalk_Photo_2021-11-15-22-34-01%20001.png',
      hitCount: 1034,
      createdAt: '2021-11-24T06:13:40.112Z',
      reactions: [],
      comments: [],
    },
    {
      id: '94',
      projectTitle: '[BE] 개발 스터디, 프로젝트 플랫폼',
      description: ' IT 현업자들을 위한 웹앱이며, 함께 목적 달성을 이루기 위한 사람들을 매칭 시켜주는 플랫폼입니다.',
      owner_name: 'MIC-TEAM',
      directLink: 'https://github.com/MIC-TEAM/wellseecoding-server',
      tech_stacks: [
        {
          name: 'Nginx',
        },
        {
          name: 'JWT',
        },
        {
          name: 'Jenkins',
        },
        {
          name: 'Spring',
        },
        {
          name: 'Github Actions',
        },
      ],
      thumbnail_url:
        'https://media.vlpt.us/images/junh0328/post/2dc006ff-938d-46c6-bed3-cf45f6c3267e/KakaoTalk_Photo_2021-11-15-22-34-01%20001.png',
      hitCount: 1481,
      createdAt: '2021-11-24T06:23:02.304Z',
      reactions: [],
      comments: [
        {
          id: '51',
        },
      ],
    },
    {
      id: '95',
      projectTitle: 'Golang과 React로 만든 채팅앱',
      description: '웹소켓, golang과 React.js로 만든 간단한 채팅앱',
      owner_name: 'nekonako',
      directLink: 'https://github.com/nekonako/moechat',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Next.js',
        },
        {
          name: 'PostgreSQL',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'Docker',
        },
        {
          name: 'Go',
        },
        {
          name: 'WebSocket',
        },
        {
          name: 'Tailwind CSS',
        },
      ],
      thumbnail_url: 'https://devfolio.link:1337/uploads/moechat_screenshot_4e75052f76.png?40177.5',
      hitCount: 1240,
      createdAt: '2021-11-25T07:56:07.490Z',
      reactions: [],
      comments: [],
    },
    {
      id: '96',
      projectTitle: "내 손 안의 스트레스 휴지통, '비움'  Server repository",
      description:
        '스트레스 안넘치게 관리중\n살아가며 필연적으로 마주치는 크고 작은 스트레스들... 당신을 괴롭히는 스트레스, 휴지통에 버려버리세요!',
      owner_name: 'TeamB-um',
      directLink: 'https://github.com/TeamB-um/B-umServer',
      tech_stacks: [
        {
          name: 'Nodejs',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'MongoDB',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/143528689-f2a17d3d-5b4a-425f-8ff8-b832f76b33fe.png',
      hitCount: 1185,
      createdAt: '2021-11-26T04:50:26.234Z',
      reactions: [],
      comments: [],
    },
    {
      id: '97',
      projectTitle: "내 손 안의 스트레스 휴지통, '비움' - Android repository",
      description:
        "'비움'의 핵심 가치 - 스트레스를 글로 적고, 적은 글을 분리수거함 또는 삭제함에 버리는 것을 이미지로 표현합니다.",
      owner_name: 'TeamB-um',
      directLink: 'https://github.com/TeamB-um/B-umAndroid',
      tech_stacks: [
        {
          name: 'Kotlin',
        },
        {
          name: 'Retrofit',
        },
        {
          name: 'ViewPager2',
        },
        {
          name: 'Glide',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/70695311/126065328-70124e21-f0c2-4e9b-a0f8-b4e3086f31b6.jpg',
      hitCount: 683,
      createdAt: '2021-11-26T04:56:13.674Z',
      reactions: [],
      comments: [],
    },
    {
      id: '98',
      projectTitle: "내 손 안의 스트레스 휴지통, '비움' - IOS repository",
      description:
        '살아가며 필연적으로 마주치는 크고 작은 스트레스들... 🙄💨 완벽한 해결이 아니더라도 한 스푼 덜어드리겠습니다.\n당신을 괴롭히는 스트레스, 휴지통에 버려버리세요!',
      owner_name: 'TeamB-um',
      directLink: 'https://github.com/TeamB-um/B-umiOS',
      tech_stacks: [
        {
          name: 'Swift',
        },
        {
          name: 'Alamofire',
        },
        {
          name: 'SnapKit',
        },
        {
          name: 'Lottie-ios',
        },
        {
          name: 'MultiProgressView',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/26399850/124559276-842d4a80-de76-11eb-9c24-048e5fd6776a.png',
      hitCount: 992,
      createdAt: '2021-11-26T05:00:02.150Z',
      reactions: [
        {
          id: '296',
        },
        {
          id: '315',
        },
      ],
      comments: [],
    },
    {
      id: '99',
      projectTitle: 'Flutter와 Dart로 만든 AES-256 암호화 파일공유 앱',
      description: '빠르고 간편한 크로스플랫폼, 오픈소스 파일공유 플랫폼 MVP',
      owner_name: 'odinapp',
      directLink: 'https://github.com/odinapp/odin',
      tech_stacks: [
        {
          name: 'Dart',
        },
        {
          name: 'Flutter',
        },
      ],
      thumbnail_url: 'https://raw.githubusercontent.com/odinapp/odin/main/assets/header.png',
      hitCount: 557,
      createdAt: '2021-11-29T05:00:27.415Z',
      reactions: [],
      comments: [],
    },
    {
      id: '100',
      projectTitle: 'Yetda (옛다) - Android repository',
      description: '누군가를 위해 선물을 고를 때 고민을 줄여줄 수 있게 도와주는 앱을 만듭니다.',
      owner_name: 'Nexters',
      directLink: 'https://github.com/Nexters/Yetda_Android',
      tech_stacks: [
        {
          name: 'Kotlin',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/144168867-2f2f4fe6-e150-4388-b662-28cee0a3222b.png',
      hitCount: 67,
      createdAt: '2021-12-01T05:04:59.793Z',
      reactions: [],
      comments: [],
    },
    {
      id: '101',
      projectTitle: '오다주웠다 옛다 선물-IOS repository',
      description: '매번 친구들 생일선물 챙기기, 선물고르기 너무 어렵지 않나요? 옛다와 함께 선물고민 날려버려요!',
      owner_name: 'Nexters',
      directLink: 'https://github.com/Nexters/Yetda_iOS',
      tech_stacks: [
        {
          name: 'SnapKit',
        },
        {
          name: 'Lottie-ios',
        },
        {
          name: 'SwiftLint',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/144174718-979c689d-f4ba-4dba-b593-6ee2ba813d0f.png',
      hitCount: 28,
      createdAt: '2021-12-01T05:04:52.920Z',
      reactions: [],
      comments: [],
    },
    {
      id: '102',
      projectTitle: 'Phaser, React 로 만든 가상 오피스 공간',
      description: '가상오피스 공간을 만들어보자! 2021 Monte Jade Innovation Competition 우승작입니다.',
      owner_name: 'kevinshen56714',
      directLink: 'https://github.com/kevinshen56714/SkyOffice',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'Phaser3',
        },
        {
          name: 'Colyseus',
        },
        {
          name: 'PeerJS',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/144370579-763a962c-5076-413c-9ea6-1043985791f6.png',
      hitCount: 1858,
      createdAt: '2021-12-02T06:39:57.034Z',
      reactions: [],
      comments: [
        {
          id: '41',
        },
      ],
    },
    {
      id: '103',
      projectTitle: '개발자들을 위한 채팅방-디디톡',
      description:
        '디디톡은 개발자들을 위한 채팅방 플랫폼입니다. 개발자들이 코드 혹은 기술과 관련해서 질문을 올리고 답할 수 있게 만든 서비스입니다.',
      owner_name: 'kidow',
      directLink: 'https://github.com/kidow/ddtalk',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'Firebase',
        },
        {
          name: 'Monaco Editor',
        },
        {
          name: 'Semantic UI',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/144537511-e5ac34e9-d4f3-406e-b929-0fb8233beab2.png',
      hitCount: 980,
      createdAt: '2021-12-03T03:02:49.232Z',
      reactions: [],
      comments: [],
    },
    {
      id: '104',
      projectTitle: '개발자 포트폴리오 사이트 템플릿',
      description: 'Nuxt.js, TailwindCSS와 Vue-Notion으로 만든 개발자 포트폴리오 사이트 템플릿',
      owner_name: 'aymaneMx',
      directLink: 'https://github.com/aymaneMx/aymaneMx.com',
      tech_stacks: [
        {
          name: 'Vue.js',
        },
        {
          name: 'Tailwind CSS',
        },
        {
          name: 'Nuxt.js',
        },
        {
          name: 'Netlify',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/26237320/144568963-7ba93294-aa0c-41a4-92e4-3073a146c4fa.png',
      hitCount: 558,
      createdAt: '2021-12-23T13:02:19.499Z',
      reactions: [],
      comments: [],
    },
    {
      id: '105',
      projectTitle: '스냅챗 클론 리액트+타입스크립트 프로젝트',
      description:
        '👻 React, Redux 및 Typescript로 구축된 SnapChat 클론. SASS로 스타일을 적용하고 Cypress, Jest 및 Enzyme으로 테스트 작성했습니다.',
      owner_name: 'TowhidKashem',
      directLink: 'https://github.com/TowhidKashem/snapchat-clone',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'Jest',
        },
        {
          name: 'SCSS',
        },
        {
          name: 'Cypress',
        },
        {
          name: 'Enzyme',
        },
      ],
      thumbnail_url: 'https://github.com/TowhidKashem/snapchat-clone/raw/master/public/readme/filters.gif',
      hitCount: 291,
      createdAt: '2021-12-07T06:47:26.993Z',
      reactions: [],
      comments: [],
    },
    {
      id: '106',
      projectTitle: '우리 지금 만나',
      description: '서로 다른 위치에서 출발하는 사람들의 약속 장소를 추천하고 경로를 확인할 수 있는 앱',
      owner_name: '2020Hanium',
      directLink: 'https://github.com/2020Hanium/WeMeetNow_Android',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'Android',
        },
        {
          name: 'Beacon',
        },
        {
          name: 'T map API',
        },
        {
          name: 'Socket I.O',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/144979487-a52ccd2e-75ec-4d5a-84ec-46d55e1c760d.png',
      hitCount: 103,
      createdAt: '2021-12-07T06:47:29.535Z',
      reactions: [],
      comments: [],
    },
    {
      id: '107',
      projectTitle: '버킷리스트 만들고 꿈을 이루자',
      description: '리액트, tailwind css와 파이어베이스로 만든 버킷리스트 앱',
      owner_name: 'rutikwankhade',
      directLink: 'https://github.com/rutikwankhade/Bucket',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Firebase',
        },
        {
          name: 'Tailwind CSS',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/47467468/135454486-4d8ca9cc-206f-4163-9427-c20016803977.png',
      hitCount: 920,
      createdAt: '2021-12-09T08:18:13.554Z',
      reactions: [],
      comments: [],
    },
    {
      id: '108',
      projectTitle: '영화/TV 소셜미디어 앱',
      description:
        'Popcorn은 MERNG 스택(MongoDb, Express.js, React.js, Node.js, GraphQL)을 사용하는 영화 및 TV 프로그램용 소셜 미디어 앱입니다. 사용자는 TV 시리즈 및 영화와 관련된 게시물을 작성하고 토론을 하고, 인기 급상승 해시태그 목록을 보고, 시청할 항목을 검색하고, 관심 목록에 추가할 수 있습니다.',
      owner_name: 'natbibi',
      directLink: 'https://github.com/natbibi/popcorn',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Nodejs',
        },
        {
          name: 'Express',
        },
        {
          name: 'GraphQL',
        },
        {
          name: 'MongoDB',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/58271566/133894656-ac2eb102-f84c-4080-b855-7d101ee718a0.gif',
      hitCount: 539,
      createdAt: '2021-12-14T06:06:20.796Z',
      reactions: [],
      comments: [],
    },
    {
      id: '109',
      projectTitle: 'Angular 프로젝트 관리 앱',
      description:
        'Angular로 만든 빠르고 간편한 프로젝트 관리 앱. 여러 조직을 동시에 관리할 수 있습니다. 역할에 따라 다른 권한 가능합니다.',
      owner_name: 'adisreyaj',
      directLink: 'https://github.com/adisreyaj/compito',
      tech_stacks: [
        {
          name: 'PostgreSQL',
        },
        {
          name: 'Angular',
        },
        {
          name: 'Tailwind CSS',
        },
        {
          name: 'Prisma',
        },
        {
          name: 'NestJS',
        },
        {
          name: 'Nx',
        },
      ],
      thumbnail_url: 'https://raw.githubusercontent.com/adisreyaj/compito/main/assets/compito.jpg',
      hitCount: 412,
      createdAt: '2021-12-14T06:06:30.339Z',
      reactions: [
        {
          id: '295',
        },
      ],
      comments: [],
    },
    {
      id: '110',
      projectTitle: '우리 학교 재능 공유 플랫폼 Cake- react native repository',
      description:
        'Cake는 위드코로나 시행에 발맞춰, 대학생들이 같은 학교 학생과 직접 만나 서로의 재능을 교환할 수 있도록 돕는 재능 공유 플랫폼입니다.\nCake와 함께, 믿음직한 우리 학교 선후배, 동기들과 새로운 재능을 개발해 보세요! 🔥',
      owner_name: 'wanted-fork-fork',
      directLink: 'https://github.com/wanted-fork-fork/cake-APP',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'Ruby',
        },
        {
          name: 'Objective-C',
        },
        {
          name: 'Starlark',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/145336989-2b31b803-a675-4c6e-ba8f-297dccc968e5.png',
      hitCount: 643,
      createdAt: '2021-12-09T08:18:17.319Z',
      reactions: [],
      comments: [],
    },
    {
      id: '111',
      projectTitle: '우리 학교 재능 공유 플랫폼 Cake- 백엔드 repository',
      description:
        'Cake는 위드코로나 시행에 발맞춰, 대학생들이 같은 학교 학생과 직접 만나 서로의 재능을 교환할 수 있도록 돕는 재능 공유 플랫폼입니다.\nCake와 함께, 믿음직한 우리 학교 선후배, 동기들과 새로운 재능을 개발해 보세요! 🔥',
      owner_name: 'wanted-fork-fork',
      directLink: 'https://github.com/wanted-fork-fork/cake-BE',
      tech_stacks: [
        {
          name: 'Spring Boot',
        },
        {
          name: 'Spring Security',
        },
        {
          name: 'JPA',
        },
        {
          name: 'JUnit5',
        },
        {
          name: 'Google SMTP',
        },
        {
          name: 'ImgScalr',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/145350796-73eec468-571e-4b2e-abe0-516dae1e1415.png',
      hitCount: 615,
      createdAt: '2021-12-09T08:18:19.706Z',
      reactions: [],
      comments: [],
    },
    {
      id: '112',
      projectTitle: '🍰재능 공유? A piece of Cake-프론트엔드 repository',
      description:
        'Cake는 위드코로나 시행에 발맞춰, 대학생들이 같은 학교 학생과 직접 만나 서로의 재능을 교환할 수 있도록 돕는 재능 공유 플랫폼입니다.\nCake와 함께, 믿음직한 우리 학교 선후배, 동기들과 새로운 재능을 개발해 보세요! 🔥',
      owner_name: 'wanted-fork-fork',
      directLink: 'https://github.com/wanted-fork-fork/cake-FE',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Next.js',
        },
        {
          name: 'Axios',
        },
        {
          name: 'Styled-components',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'Mobx',
        },
        {
          name: 'Eslint',
        },
      ],
      thumbnail_url:
        'https://camo.githubusercontent.com/06f3861838a59b505585ca118ecd48d2a4fe9be48b5e6b0663d71b15fc5a493e/68747470733a2f2f63617073756c652d72656e6465722e76657263656c2e6170702f6170693f747970653d7265637426636f6c6f723d303a6661356436362c3130303a666331313530266865696768743d3330302673656374696f6e3d68656164657226746578743d43616b6526666f6e7453697a653d393026666f6e74436f6c6f723d66366636663626646573633dec9ab0eba6ac253230ed9599eab590253230ec9eaceb8aa5253230eab3b5ec9ca0253230ed948ceb9eabed8fbc253230f09f8db02664657363416c69676e593d3730',
      hitCount: 1198,
      createdAt: '2021-12-09T08:18:22.168Z',
      reactions: [
        {
          id: '258',
        },
        {
          id: '260',
        },
        {
          id: '267',
        },
        {
          id: '268',
        },
      ],
      comments: [
        {
          id: '45',
        },
      ],
    },
    {
      id: '113',
      projectTitle: '🔮 안전한 화상 그룹 채팅 프로젝트',
      description:
        '프라이버시는 이 프로젝트의 원동력입니다. WebRTC와 같은 보안 기술을 사용하여 참가자 간에 직접 연결합니다. 웹 앱을 제공하고 커뮤니케이션을 중재하는 웹사이트는 가능한 한 적은 데이터를 저장합니다. 계정이 필요하지 않고, 쿠키를 사용하지 않습니다.',
      owner_name: 'holtwick',
      directLink: 'https://github.com/holtwick/briefing',
      tech_stacks: [
        {
          name: 'Vue.js',
        },
        {
          name: 'Swift',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'SCSS',
        },
        {
          name: 'WebRTC',
        },
      ],
      thumbnail_url: 'https://github.com/holtwick/briefing/raw/master/assets/sample.jpg',
      hitCount: 367,
      createdAt: '2021-12-10T00:21:53.083Z',
      reactions: [
        {
          id: '259',
        },
      ],
      comments: [],
    },
    {
      id: '114',
      projectTitle: 'Jekyll 블로그 안드로이드 앱',
      description: '안드로이드 기기에서 직접 Jekyll 블로그를 관리할 수 있는 JekyllEx Android 앱',
      owner_name: 'jekyllex',
      directLink: 'https://github.com/jekyllex/jekyllex-android',
      tech_stacks: [
        {
          name: 'Kotlin',
        },
        {
          name: 'Android',
        },
      ],
      thumbnail_url: 'https://raw.githubusercontent.com/jekyllex/jekyllex-android/main/media/cover-image.png',
      hitCount: 278,
      createdAt: '2021-12-23T13:02:09.031Z',
      reactions: [],
      comments: [],
    },
    {
      id: '115',
      projectTitle: '매일매일 미션을 수행하며 카드를 수집해 보자',
      description:
        '♠️ 매일 하루에 한 번 받을 질문에 답하면서 자신을 기록해보세요.\n질문에 답을 하고 기록하는 과정에서, 당신이 무엇을 좋아하는지.앞으로 당신이 어떤 삶을 살고 싶은지 알아가 보세요.',
      owner_name: 'mash-up-kr',
      directLink: 'https://github.com/mash-up-kr/ahobsu-node-backend',
      tech_stacks: [
        {
          name: 'SQLite',
        },
        {
          name: 'Nodejs',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'Express',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'JWT',
        },
        {
          name: 'Sequelize',
        },
        {
          name: 'Webpack',
        },
      ],
      thumbnail_url: 'https://github.com/mash-up-kr/Moti_iOS/raw/develop/images/onbording.png',
      hitCount: 694,
      createdAt: '2021-12-14T06:17:24.383Z',
      reactions: [],
      comments: [],
    },
    {
      id: '116',
      projectTitle: '백엔드 코드 없이 커스텀 form 만들기',
      description: 'React, python, HTML 등에서 사용 가능한 functional form 솔루션',
      owner_name: 'tewarig',
      directLink: 'https://github.com/tewarig/MeowForm',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'HTML',
        },
      ],
      thumbnail_url:
        'https://camo.githubusercontent.com/ee03fefd9489b2cef2580fb99bfe7afcd38cf61940312d9d811c47b72f875487/68747470733a2f2f63646e2e686173686e6f64652e636f6d2f7265732f686173686e6f64652f696d6167652f75706c6f61642f76313633303232313230363735392f4a66564437634345312e676966',
      hitCount: 462,
      createdAt: '2021-12-16T07:01:12.045Z',
      reactions: [],
      comments: [],
    },
    {
      id: '117',
      projectTitle: '[FE] 🐶개팅 Getting-유기견 입양 플랫폼',
      description:
        '올바른 반려견 입양 문화를 지향하는 유기견 입양 웹앱 서비스입니다. 반려견에 대한 교육 지식과 퀴즈를 통해 예비 견주님들께는 반려견을 키울 수 있다는 자신감을, 임시 보호자님들께는 믿고 맡길 수 있는 예비 견주님들을 만나실 수 있는 기회를 제공하고자 합니다.',
      owner_name: 'hanhae99-final-project-13',
      directLink: 'https://github.com/hanhae99-final-project-13/Getting-FrontEnd',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'Axios',
        },
        {
          name: 'Styled-components',
        },
        {
          name: 'sockJS',
        },
        {
          name: 'Lodash',
        },
        {
          name: 'React-device-detect',
        },
        {
          name: 'React-slick',
        },
        {
          name: 'Stompjs',
        },
      ],
      thumbnail_url:
        'https://github.com/hanhae99-final-project-13/Getting-FrontEnd/raw/main/public/img/GUIicon/getting_readme.svg',
      hitCount: 746,
      createdAt: '2021-12-16T07:12:06.226Z',
      reactions: [],
      comments: [],
    },
    {
      id: '118',
      projectTitle: '[BE] 🐶개팅 Getting-유기견 입양 플랫폼',
      description:
        '올바른 반려견 입양 문화를 지향하는 유기견 입양 웹앱 서비스입니다. 반려견에 대한 교육 지식과 퀴즈를 통해 예비 견주님들께는 반려견을 키울 수 있다는 자신감을, 임시 보호자님들께는 믿고 맡길 수 있는 예비 견주님들을 만나실 수 있는 기회를 제공하고자 합니다.',
      owner_name: 'hanhae99-final-project-13',
      directLink: 'https://github.com/hanhae99-final-project-13/docking-final-project',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'Spring Security',
        },
        {
          name: 'JPA',
        },
        {
          name: 'Redis',
        },
        {
          name: 'Gradle',
        },
        {
          name: 'WebSocket',
        },
        {
          name: 'QueryDSL',
        },
      ],
      thumbnail_url:
        'https://github.com/hanhae99-final-project-13/Getting-FrontEnd/raw/main/public/img/GUIicon/getting_readme.svg',
      hitCount: 1097,
      createdAt: '2021-12-16T07:16:58.583Z',
      reactions: [
        {
          id: '270',
        },
      ],
      comments: [],
    },
    {
      id: '119',
      projectTitle: '미리 맞이하는 당신의 이른 죽음 -  Server repository',
      description:
        '☄️ 미리 맞이해보는 당신의 이른 죽음\n"죽음이라는 새로운 시각으로 과거의 삶을 바라보고, 회고하며 그를 통해 현재와 미래의 삶을 재구성한다."',
      owner_name: 'Apophis-AppJam',
      directLink: 'https://github.com/Apophis-AppJam/ApophisServer',
      tech_stacks: [
        {
          name: 'Nodejs',
        },
        {
          name: 'Express',
        },
        {
          name: 'Sequelize',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/61377122/103648239-e2e53a80-4f9f-11eb-998a-4f5f9034564c.jpeg',
      hitCount: 770,
      createdAt: '2021-12-17T01:40:11.195Z',
      reactions: [],
      comments: [],
    },
    {
      id: '120',
      projectTitle: '미리 맞이하는 당신의 이른 죽음 -  Android repository',
      description:
        '☄️ 미리 맞이해보는 당신의 이른 죽음\n"죽음이라는 새로운 시각으로 과거의 삶을 바라보고, 회고하며 그를 통해 현재와 미래의 삶을 재구성한다."',
      owner_name: 'Apophis-AppJam',
      directLink: 'https://github.com/Apophis-AppJam/ApophisAndroid',
      tech_stacks: [
        {
          name: 'Kotlin',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/146474784-a6c5519b-d4f4-45ff-a578-e2faef0033e1.png',
      hitCount: 470,
      createdAt: '2021-12-17T01:44:43.045Z',
      reactions: [],
      comments: [],
    },
    {
      id: '121',
      projectTitle: '미리 맞이하는 당신의 이른 죽음 -  IOS repository',
      description:
        '☄️ 미리 맞이해보는 당신의 이른 죽음\n"죽음이라는 새로운 시각으로 과거의 삶을 바라보고, 회고하며 그를 통해 현재와 미래의 삶을 재구성한다."',
      owner_name: 'Apophis-AppJam',
      directLink: 'https://github.com/Apophis-AppJam/ApophisiOS',
      tech_stacks: [
        {
          name: 'Swift',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/60260284/104741827-0f156e00-578d-11eb-960a-3baa6def77aa.png',
      hitCount: 614,
      createdAt: '2021-12-17T01:48:15.286Z',
      reactions: [],
      comments: [],
    },
    {
      id: '122',
      projectTitle: 'react-three-fiber를 이용한 리액트 레이싱 게임',
      description: '리액트로 레이싱 게임을 만들어보자',
      owner_name: 'pmndrs',
      directLink: 'https://github.com/pmndrs/racing-game',
      tech_stacks: [
        {
          name: 'CSS',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'React-three-fiber',
        },
      ],
      thumbnail_url: 'https://github.com/pmndrs/racing-game/raw/main/thumbnail.webp',
      hitCount: 716,
      createdAt: '2021-12-23T13:08:08.262Z',
      reactions: [],
      comments: [
        {
          id: '47',
        },
      ],
    },
    {
      id: '123',
      projectTitle: '학교가 불편한 순간, 언제였나요? - Front Repository',
      description:
        '"학교가 불편한 순간"은 학교가 더욱 더 개선되기 위해 학생들 관점에서 느끼는 불편한 순간을 기록하는 공간입니다.',
      owner_name: 'themoment-team',
      directLink: 'https://github.com/themoment-team/MontBlanc-front',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Styled-components',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'Recoil',
        },
        {
          name: 'Netlify',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/147246107-7fb42286-cb86-490c-abed-561591447fa9.png',
      hitCount: 594,
      createdAt: '2021-12-23T13:20:26.968Z',
      reactions: [],
      comments: [],
    },
    {
      id: '124',
      projectTitle: '학교가 불편한 순간, 언제였나요? - Backend Repository',
      description:
        '"학교가 불편한 순간"은 학교가 더욱 더 개선되기 위해 학생들 관점에서 느끼는 불편한 순간을 기록하는 공간입니다.',
      owner_name: 'themoment-team',
      directLink: 'https://github.com/themoment-team/K2-server',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'JPA',
        },
        {
          name: 'Gradle',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/147246107-7fb42286-cb86-490c-abed-561591447fa9.png',
      hitCount: 876,
      createdAt: '2021-12-23T13:23:40.672Z',
      reactions: [],
      comments: [],
    },
    {
      id: '125',
      projectTitle: 'FakeFlix - 넷플릭스 완벽하게 클론한 페이크플릭스',
      description: '리액트, 리덕스, 파이어베이스로 완벽하게 클론한 넷플릭스',
      owner_name: 'Th3Wall',
      directLink: 'https://github.com/Th3Wall/Fakeflix',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'React Router',
        },
        {
          name: 'Redux-thunk',
        },
        {
          name: 'Firebase',
        },
        {
          name: 'React Hooks',
        },
        {
          name: 'Redux-saga',
        },
        {
          name: 'Redux-persist',
        },
      ],
      thumbnail_url:
        'https://camo.githubusercontent.com/5a1dc958469de1d7648247524aad4d3ee2cdfb6e2b5da75ba0bbc499973c4118/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f54683357616c6c2f6173736574732d63646e2f46616b65666c69782f46616b65666c69785f726561646d652e706e67',
      hitCount: 2000,
      createdAt: '2021-12-23T13:34:54.159Z',
      reactions: [
        {
          id: '269',
        },
      ],
      comments: [],
    },
    {
      id: '126',
      projectTitle: '🍭 Vue를 실행시키기위한 최소한의 프레임워크',
      description: 'react-storybook에서 영감을 받은 Vue 구성 요소를 보여주기 위한 최소한의 프레임워크입니다.',
      owner_name: 'vue-play',
      directLink: 'https://github.com/vue-play/vue-play',
      tech_stacks: [
        {
          name: 'Vue.js',
        },
      ],
      thumbnail_url: 'https://github.com/vue-play/vue-play/raw/master/media/preview.gif',
      hitCount: 240,
      createdAt: '2021-12-30T12:33:17.203Z',
      reactions: [],
      comments: [],
    },
    {
      id: '127',
      projectTitle: '블로그 글을 쉽게 트윗할 수 있는 서비스',
      description: '블로그 포스팅 된 글을 손쉽게 트윗할 수 있습니다. ',
      owner_name: 'geekysrm',
      directLink: 'https://github.com/geekysrm/hashnode-to-twitter',
      tech_stacks: [
        {
          name: 'Next.js',
        },
        {
          name: 'Tailwind CSS',
        },
        {
          name: 'Auth0',
        },
        {
          name: 'Twitter API',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/10224804/131415177-0db9d07a-8c39-4f34-977a-24398f0ca9ca.png',
      hitCount: 177,
      createdAt: '2021-12-30T12:40:52.733Z',
      reactions: [],
      comments: [],
    },
    {
      id: '128',
      projectTitle: '✨ 운동 포스터 제작 및 공유 iOS 어플리케이션 - Bodymood ✨',
      description:
        '오늘도 헬스장 출첵 성공! 헬스장에서 오늘 하루를 마무리 지으셨다면,\n그 마무리를 Bodymood가 멋진 한 장의 포스터로 만들어 드릴게요!',
      owner_name: 'depromeet',
      directLink: 'https://github.com/depromeet/bodymood-iOS',
      tech_stacks: [
        {
          name: 'Swift',
        },
        {
          name: 'Rich Text Format',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/147752990-8dab19c0-05c2-40fc-8fb4-8ea6e815dc2e.png',
      hitCount: 259,
      createdAt: '2021-12-30T13:03:13.412Z',
      reactions: [],
      comments: [],
    },
    {
      id: '129',
      projectTitle: '✨ 운동 포스터 제작 및 공유 Bodymood ✨- Flutter repository',
      description:
        '오늘도 헬스장 출첵 성공! 헬스장에서 오늘 하루를 마무리 지으셨다면,\n그 마무리를 Bodymood가 멋진 한 장의 포스터로 만들어 드릴게요!',
      owner_name: 'depromeet',
      directLink: 'https://github.com/depromeet/bodymood-flutter',
      tech_stacks: [
        {
          name: 'HTML',
        },
        {
          name: 'Dart',
        },
        {
          name: 'Ruby',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/147752990-8dab19c0-05c2-40fc-8fb4-8ea6e815dc2e.png',
      hitCount: 250,
      createdAt: '2021-12-30T13:03:10.260Z',
      reactions: [],
      comments: [],
    },
    {
      id: '130',
      projectTitle: '✨ 운동 포스터 제작 및 공유 서비스 Bodymood ✨- Backend repository',
      description:
        'Bodymood는 오늘의 운동 루틴과 감정을 한 장의 포스터로 만들어 더욱 재밌고 지속적으로 기록할 수 있게 도와주는 아카이빙 서비스입니다.\n',
      owner_name: 'depromeet',
      directLink: 'https://github.com/depromeet/bodymood-backend',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'PostgreSQL',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'JPA',
        },
        {
          name: 'Kotlin',
        },
        {
          name: 'Redis',
        },
        {
          name: 'Gradle',
        },
        {
          name: 'QueryDSL',
        },
        {
          name: 'Kotest',
        },
        {
          name: 'Mockk',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/147752990-8dab19c0-05c2-40fc-8fb4-8ea6e815dc2e.png',
      hitCount: 330,
      createdAt: '2021-12-30T13:03:06.602Z',
      reactions: [],
      comments: [],
    },
    {
      id: '131',
      projectTitle: '술 추천 및 리뷰 서비스 주절주절',
      description: '술 알고 마시자! 알고 마시면 더 맛있는 술!\n당신을 위한 술을 추천해드립니다.\n',
      owner_name: 'woowacourse-teams',
      directLink: 'https://github.com/woowacourse-teams/2021-jujeol-jujeol',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'JPA',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'Emotion',
        },
        {
          name: 'QueryDSL',
        },
        {
          name: 'React Query',
        },
        {
          name: 'Flyway',
        },
        {
          name: 'RestDocs',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/67677561/127765454-d9abca84-093f-46b9-b31c-e73e3ef4090c.png',
      hitCount: 1300,
      createdAt: '2021-12-30T13:08:51.319Z',
      reactions: [],
      comments: [],
    },
    {
      id: '132',
      projectTitle: 'SCOPE 프로젝트 개발 매칭 플랫폼 - Backend repository',
      description: '팀원 구하는 개발자 모두 주목!\n가장 쉽고 빠른 개발프로젝트 추천 매칭 플랫폼',
      owner_name: 'Scope-Team9',
      directLink: 'https://github.com/Scope-Team9/Scope_BackEnd',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'Spring Boot',
        },
        {
          name: 'Spring Security',
        },
        {
          name: 'JPA',
        },
        {
          name: 'Swagger',
        },
        {
          name: 'QueryDSL',
        },
        {
          name: 'Jasypt',
        },
        {
          name: 'EhCache',
        },
        {
          name: 'Bucket4j',
        },
        {
          name: 'Slf4j',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/70922665/144248469-03f41525-4e68-4a17-a777-64b45ac91771.png',
      hitCount: 1629,
      createdAt: '2021-12-30T13:19:49.253Z',
      reactions: [],
      comments: [],
    },
    {
      id: '133',
      projectTitle: 'SCOPE 프로젝트 개발 매칭 플랫폼 - Frontend repository',
      description:
        '나와 맞는 팀원을 구해 프로젝트를 진행해보세요!\n협업 성향과 추천 통계를 바탕으로 성향이 맞을 가능성이 높은 사용자의 게시물을 추천해줍니다!\n성향테스트 결과는 9마리의 동물로 제공됩니다! 🐯🐺🐼🦊🐶🐰🦝🦭😺',
      owner_name: 'Scope-Team9',
      directLink: 'https://github.com/Scope-Team9/Scope_FrontEnd',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'React Router',
        },
        {
          name: 'Axios',
        },
        {
          name: 'Styled-components',
        },
        {
          name: 'Eslint',
        },
        {
          name: 'Redux Toolkit',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/76721552/144202575-eaa96e56-508c-48b2-917f-b7e543454c44.png',
      hitCount: 712,
      createdAt: '2021-12-30T13:28:56.280Z',
      reactions: [],
      comments: [],
    },
    {
      id: '134',
      projectTitle: '멘탈 날씨 트래커',
      description: "sturmglas. Don't weather your emotions alone.",
      owner_name: 'winnekes',
      directLink: 'https://github.com/winnekes/sturmglas',
      tech_stacks: [
        {
          name: 'Next.js',
        },
        {
          name: 'PostgreSQL',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'GraphQL',
        },
        {
          name: 'Supabase',
        },
        {
          name: 'Chakra-ui',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/148492176-8f2d6e74-bb5e-48b7-8027-60630397d089.png',
      hitCount: 363,
      createdAt: '2022-01-07T05:25:03.284Z',
      reactions: [],
      comments: [],
    },
    {
      id: '135',
      projectTitle: '약속을 지키기 위한 위치공유 플랫폼 어디야⏱',
      description: '약속을 지키기 위한 위치공유 플랫폼 어디야⏱',
      owner_name: 'jins0704',
      directLink: 'https://github.com/jins0704/WhereYa_iOS',
      tech_stacks: [
        {
          name: 'Swift',
        },
        {
          name: 'Kingfisher',
        },
        {
          name: 'Alamofire',
        },
        {
          name: 'FSCalendar',
        },
        {
          name: 'Lottie-ios',
        },
        {
          name: 'Objective-C',
        },
        {
          name: 'SwiftyJSON',
        },
        {
          name: 'Toast-Swift',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/148496611-9414791c-4d9d-466d-9c76-eec5aba17f5c.png',
      hitCount: 653,
      createdAt: '2022-01-07T05:36:11.877Z',
      reactions: [],
      comments: [],
    },
    {
      id: '136',
      projectTitle: 'INU 이런날씨 - 인천대 날씨를 학교 마스코트 캐릭터의 옷차림으로 알려주는 날씨 앱',
      description:
        '인천대학교가 위치한 송도의 날씨를 인천대 마스코트 사자 캐릭터의 옷차림으로 알려주는 날씨 어플리케이션',
      owner_name: 'ChoiAhHyun',
      directLink: 'https://github.com/ChoiAhHyun/thisweatherAndroid',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'Android',
        },
        {
          name: 'Retrofit',
        },
        {
          name: 'Gson',
        },
        {
          name: 'MPAndroidChart',
        },
        {
          name: 'ViewPagerIndicator',
        },
        {
          name: 'Loading',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/35266591/79566508-a316b400-80ed-11ea-9402-3bf20edcfdbf.jpg',
      hitCount: 600,
      createdAt: '2022-01-07T05:40:51.529Z',
      reactions: [],
      comments: [],
    },
    {
      id: '137',
      projectTitle: '💪 모두의 헬스 케어 비서 - MOBI 💪',
      description: '일상생활에서 편리하게 식이관리를 할 수 있게 도와주는 애플리케이션입니다. ',
      owner_name: 'yeahsilver',
      directLink: 'https://github.com/yeahsilver/MOBI',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'HTML',
        },
        {
          name: 'Firebase',
        },
        {
          name: 'Objective-C',
        },
        {
          name: 'C++',
        },
        {
          name: 'C ',
        },
        {
          name: 'CMake',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/39258902/84595274-eb561680-ae91-11ea-8e14-541dad6d9bae.png',
      hitCount: 601,
      createdAt: '2022-01-07T06:14:24.955Z',
      reactions: [
        {
          id: '279',
        },
      ],
      comments: [],
    },
    {
      id: '138',
      projectTitle: '🌻Sunflower-farmer 블록체인 기반 해바라기 게임',
      description:
        'A blockchain based game where players can play to earn Sunflower Farmer Tokens.\n플레이하면서 해바라기 농부 토큰을 얻을 수 있는 블록체인 기반 게임입니다.',
      owner_name: 'sunflower-farmers',
      directLink: 'https://github.com/sunflower-farmers/sunflower-farmers',
      tech_stacks: [
        {
          name: 'JavaScript',
        },
        {
          name: 'CSS',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'Solidity',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/11745561/130713259-f87fd1b4-a6f1-4b25-b8b9-4eff6beee9e9.png',
      hitCount: 706,
      createdAt: '2022-01-07T06:17:52.789Z',
      reactions: [
        {
          id: '278',
        },
      ],
      comments: [
        {
          id: '46',
        },
      ],
    },
    {
      id: '140',
      projectTitle: '🔎 패션 스캐너 (FASHION SCANNER)',
      description:
        " AI 이미지처리 기능을 활용해 '케이팝 스타가 착용한 의류에 관한 정보'와 '비슷한 의류의 판매처'를 찾아주는 서비스",
      owner_name: 'JeongHwan-dev',
      directLink: 'https://github.com/JeongHwan-dev/fashion-scanner',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Django',
        },
        {
          name: 'Nginx',
        },
        {
          name: 'PostgreSQL',
        },
        {
          name: 'Python',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
        {
          name: 'Docker',
        },
        {
          name: 'Swiper',
        },
        {
          name: 'PyTorch',
        },
        {
          name: 'Azure',
        },
      ],
      thumbnail_url: 'https://github.com/JeongHwan-dev/fashion-scanner/raw/master/readme_assets/main-page.gif',
      hitCount: 734,
      createdAt: '2022-01-12T09:03:49.198Z',
      reactions: [],
      comments: [],
    },
    {
      id: '141',
      projectTitle: '우리들끼리 공유하는 최애 장소, 플레이스픽',
      description: '플레이스픽은 신뢰있는 커뮤니티 기반의 장소 정보 공유 플랫폼입니다.',
      owner_name: 'placepic',
      directLink: 'https://github.com/placepic/placepic_android',
      tech_stacks: [
        {
          name: 'Kotlin',
        },
        {
          name: 'Material-ui',
        },
        {
          name: 'Retrofit',
        },
        {
          name: 'Glide',
        },
        {
          name: 'Gson',
        },
        {
          name: 'LiveData',
        },
        {
          name: 'Circle Imageview Custom',
        },
        {
          name: 'Circle Indicator',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/149097250-3fcf4762-940a-4fda-bd3d-a40f62fa9e75.png',
      hitCount: 619,
      createdAt: '2022-01-15T03:18:31.971Z',
      reactions: [],
      comments: [],
    },
    {
      id: '142',
      projectTitle: '🎧음악 공유 웹 사이트(MRL)-Frontend Repository',
      description: '즐겨 듣는 노래를 서로에게 공유하는 웹 서비스입니다. ',
      owner_name: 'Music-Recommendation-List',
      directLink: 'https://github.com/Music-Recommendation-List/MRL-FE',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'React Router',
        },
        {
          name: 'Axios',
        },
        {
          name: 'Material-ui',
        },
        {
          name: 'Eslint',
        },
      ],
      thumbnail_url: 'https://github.com/Music-Recommendation-List/MRL-FE/raw/master/public/images/thumbnail.png',
      hitCount: 626,
      createdAt: '2022-01-21T02:52:10.500Z',
      reactions: [],
      comments: [],
    },
    {
      id: '143',
      projectTitle: '🎵음악공유 웹 사이트-Backend repository',
      description: '즐겨 듣는 노래를 서로에게 공유하는 웹 서비스입니다.',
      owner_name: 'Music-Recommendation-List',
      directLink: 'https://github.com/Music-Recommendation-List/MRL-BE',
      tech_stacks: [
        {
          name: 'Nodejs',
        },
        {
          name: 'Express',
        },
      ],
      thumbnail_url:
        'https://github.com/Music-Recommendation-List/MRL-BE/raw/main/app/public/images/KakaoTalk_20211016_162046491.png',
      hitCount: 584,
      createdAt: '2022-01-21T02:52:13.543Z',
      reactions: [],
      comments: [],
    },
    {
      id: '144',
      projectTitle: '☕믿고 보는 카페 맵, CA:PIN -iOS repository',
      description: "오늘도 '카페 어디가지?' 하고 고민하는 당신을 위한 선정한 좋은 카페들\n지도에 전부 다 보여드릴게요!",
      owner_name: 'teamCA-PIN',
      directLink: 'https://github.com/teamCA-PIN/CA-PIN_iOS',
      tech_stacks: [
        {
          name: 'Swift',
        },
        {
          name: 'Ruby',
        },
        {
          name: 'Kingfisher',
        },
        {
          name: 'SnapKit',
        },
        {
          name: 'RxSwift',
        },
        {
          name: 'Lottie-ios',
        },
        {
          name: 'CGFloatLiteral',
        },
        {
          name: 'Fastlane',
        },
        {
          name: 'Moya',
        },
        {
          name: 'SwiftKeychainWrapper',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/63863135/125908158-2edbf7c7-90b6-4b43-85ab-b233705d0a96.png',
      hitCount: 1907,
      createdAt: '2022-01-21T02:52:16.577Z',
      reactions: [],
      comments: [],
    },
    {
      id: '145',
      projectTitle: '☕믿고 보는 카페 맵, CA:PIN -Server repository',
      description:
        "오늘도 '카페 어디가지?' 하고 고민하는 당신을 위한 선정한 좋은 카페들\n지도에 전부 다 보여드릴게요!\n",
      owner_name: 'teamCA-PIN',
      directLink: 'https://github.com/teamCA-PIN/CA-PIN_Server',
      tech_stacks: [
        {
          name: 'Nodejs',
        },
        {
          name: 'AWS',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'MongoDB',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/42789819/125911405-77e66383-5733-4bc3-847c-0b951ba8ed56.png',
      hitCount: 450,
      createdAt: '2022-01-21T02:52:18.898Z',
      reactions: [
        {
          id: '297',
        },
      ],
      comments: [],
    },
    {
      id: '146',
      projectTitle: '☕믿고 보는 카페 맵, CA:PIN -Android repository',
      description: "오늘도 '카페 어디가지?' 고민하는 분들을 위한 카페맵 앱 서비스",
      owner_name: 'teamCA-PIN',
      directLink: 'https://github.com/teamCA-PIN/CA-PIN_Android',
      tech_stacks: [
        {
          name: 'DataBinding',
        },
        {
          name: 'JetPack',
        },
        {
          name: 'Retrofit',
        },
        {
          name: 'LiveData',
        },
        {
          name: 'ViewBinding',
        },
        {
          name: 'Dependency Injection',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/72273531/125905703-553419e1-ba79-4a6c-8c3a-2a4d9ca022ac.png',
      hitCount: 424,
      createdAt: '2022-01-21T02:52:21.366Z',
      reactions: [],
      comments: [],
    },
    {
      id: '147',
      projectTitle: '🚉 빅데이터를 활용한 약속 장소 및 주변 힙플레이스 추천 앱',
      description:
        '최적의 약속 장소를 추천해주는 서비스로, 만남이 실질적으로 이루어질 수 있는 중간지점을 제공할 뿐만 아니라, 지하철의 이동시간과 환승구역까지 계산하여 공평한 중간장소를 제시',
      owner_name: 'leyuri',
      directLink: 'https://github.com/leyuri/SAI',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'HTML',
        },
        {
          name: 'Spring',
        },
        {
          name: 'Mysql',
        },
        {
          name: 'jQuery',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/150468385-c6d46f9c-5d0c-4d2e-84e0-41c00d7f5798.png',
      hitCount: 1103,
      createdAt: '2022-01-21T04:58:04.896Z',
      reactions: [],
      comments: [],
    },
    {
      id: '148',
      projectTitle: 'study-watson - 스터디 관리 웹 서비스',
      description: '효율적으로 스터디를 관리하는 가장 쉬운 방법을 제공하는 웹 서비스',
      owner_name: 'mash-up-kr',
      directLink: 'https://github.com/mash-up-kr/study-watson',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Redux',
        },
        {
          name: 'Next.js',
        },
        {
          name: 'Nodejs',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'Styled-components',
        },
        {
          name: 'Express',
        },
        {
          name: 'Webpack',
        },
        {
          name: 'Babel',
        },
        {
          name: 'Eslint',
        },
        {
          name: 'Redux-saga',
        },
      ],
      thumbnail_url:
        'https://camo.githubusercontent.com/ea2357e9face8e63e917f2fc3ab2b90240859bedd866d097e0663a2d94a29c64/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f6e4b6e36736352752d686b2f302e6a7067',
      hitCount: 849,
      createdAt: '2022-01-21T06:19:02.985Z',
      reactions: [],
      comments: [],
    },
    {
      id: '149',
      projectTitle: '🍸 Bixbar : 빅스비 칵테일 추천 캡슐',
      description: '칵테일 추천 서비스',
      owner_name: 'Bixbar',
      directLink: 'https://github.com/Bixbar/Bixbar-Integrated',
      tech_stacks: [
        {
          name: 'Django',
        },
        {
          name: 'SQLite',
        },
        {
          name: 'Python',
        },
        {
          name: 'AWS',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'Jupyter Notebook',
        },
        {
          name: 'Bixby Developer Studio',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/28800101/85258305-3d0a2c80-b4a2-11ea-8c5c-7dbd4876f294.PNG',
      hitCount: 492,
      createdAt: '2022-01-21T06:24:36.633Z',
      reactions: [
        {
          id: '289',
        },
      ],
      comments: [],
    },
    {
      id: '150',
      projectTitle: '프로젝트 관리 응용 프로그램-Front repository',
      description:
        'Jira와 같이 프로젝트의 우선순위를 선택하고 적절한 레이블을 지정한 보드를 다양한 단계에 배치할 수 있습니다.',
      owner_name: 'vishwajeetraj11',
      directLink: 'https://github.com/vishwajeetraj11/productboard',
      tech_stacks: [
        {
          name: 'React',
        },
        {
          name: 'Typescript',
        },
      ],
      thumbnail_url:
        'https://camo.githubusercontent.com/7b8b88775bd3ccb95d39e16564d6906ba325e9eb8a0cd4459f1e6e1c6f88cd2d/68747470733a2f2f63646e2e686173686e6f64652e636f6d2f7265732f686173686e6f64652f696d6167652f75706c6f61642f76313633303135333238323631392f585574656c313463492e706e67',
      hitCount: 289,
      createdAt: '2022-01-28T07:27:16.271Z',
      reactions: [],
      comments: [],
    },
    {
      id: '151',
      projectTitle: '프로젝트 관리 응용 프로그램-Backend repository',
      description:
        'Jira와 같이 프로젝트의 우선순위를 선택하고 적절한 레이블을 지정한 보드를 다양한 단계에 배치할 수 있습니다.',
      owner_name: 'vishwajeetraj11',
      directLink: 'https://github.com/vishwajeetraj11/productboard-backend',
      tech_stacks: [
        {
          name: 'Nodejs',
        },
        {
          name: 'Express',
        },
        {
          name: 'MongoDB',
        },
        {
          name: 'Socket I.O',
        },
      ],
      thumbnail_url:
        'https://camo.githubusercontent.com/9cba7fff963afcf7ce6f344981a36a4801c665c6a78f80941039bcf4d3a509a3/68747470733a2f2f63646e2e686173686e6f64652e636f6d2f7265732f686173686e6f64652f696d6167652f75706c6f61642f76313633303135333232383534352f54336663657664536a2e706e67',
      hitCount: 249,
      createdAt: '2022-01-28T07:31:20.456Z',
      reactions: [],
      comments: [],
    },
    {
      id: '152',
      projectTitle: '🏠 오늘의 부동산 - Backend repository',
      description: '지역별 아파트 매매가 정보 및 주변 편의 시설 정보 제공 부동산 서비스',
      owner_name: 'today-real-estate',
      directLink: 'https://github.com/today-real-estate/today-real-estate_back-end',
      tech_stacks: [
        {
          name: 'Spring Boot',
        },
        {
          name: 'JPA',
        },
        {
          name: 'Mysql',
        },
      ],
      thumbnail_url:
        'https://github.com/today-real-estate/today-real-estate_back-end/raw/develop/readme_assets/signup-page.gif',
      hitCount: 976,
      createdAt: '2022-01-28T07:45:11.969Z',
      reactions: [],
      comments: [],
    },
    {
      id: '153',
      projectTitle: '🏠 오늘의 부동산 - Frontend repository',
      description: '지역별 아파트 매매가 정보 및 주변 편의 시설 정보 제공 부동산 서비스',
      owner_name: 'today-real-estate',
      directLink: 'https://github.com/today-real-estate/today-real-estate_front-end',
      tech_stacks: [
        {
          name: 'Vue.js',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
        {
          name: 'Ant design',
        },
      ],
      thumbnail_url:
        'https://github.com/today-real-estate/today-real-estate_back-end/raw/develop/readme_assets/signup-page.gif',
      hitCount: 759,
      createdAt: '2022-01-28T07:47:26.763Z',
      reactions: [],
      comments: [],
    },
    {
      id: '154',
      projectTitle: '나만의 추억저장소 위드버디 💜',
      description: '친구들과의 일정과 추억을 캐릭터와 함께 기록해 관리할 수 있는 서비스',
      owner_name: 'boostcampwm-2021',
      directLink: 'https://github.com/boostcampwm-2021/iOS08-WithBuddy',
      tech_stacks: [
        {
          name: 'Swift',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/151509247-ab878871-293f-4852-b48c-8f665fdbd086.png',
      hitCount: 543,
      createdAt: '2022-01-28T08:00:45.017Z',
      reactions: [],
      comments: [],
    },
    {
      id: '155',
      projectTitle: '베프시네마 🎞',
      description:
        '인천시의 빈 집을 활용한 배리어프리 영화관 예약 서비스\n2019 Incheon Civic Hack-Fair 최우수상 수상작',
      owner_name: 'GAMSS_Android',
      directLink: 'https://github.com/ChoiAhHyun/GAMSS_Android',
      tech_stacks: [
        {
          name: 'Kotlin',
        },
        {
          name: 'Android',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/35266591/79551913-4c9d7b80-80d5-11ea-9701-0c033dba81c7.jpg',
      hitCount: 431,
      createdAt: '2022-01-28T08:05:04.761Z',
      reactions: [],
      comments: [],
    },
    {
      id: '156',
      projectTitle: '심모(심심한 사람들의 모임) for Android',
      description: '관심사 기반 번개 모임 서비스',
      owner_name: 'yapp-project',
      directLink: 'https://github.com/ChoiAhHyun/team05_android',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'Nodejs',
        },
        {
          name: 'AWS',
        },
        {
          name: 'Android',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/37354708/151510203-f8649aa5-5a9b-410c-a108-5b9524ede555.png',
      hitCount: 499,
      createdAt: '2022-01-28T08:08:48.411Z',
      reactions: [],
      comments: [],
    },
    {
      id: '157',
      projectTitle: '⚒ 로드맵/플로우차트 생성 프로그램',
      description:
        '블로그 및 프레젠테이션을 위한 로드맵과 순서도를 만드는 플랫폼입니다. PNG로 저장하거나 간단한 클릭으로 웹사이트에 임베드할 수 있습니다',
      owner_name: 'theashishmaurya',
      directLink: 'https://github.com/theashishmaurya/Mapify',
      tech_stacks: [
        {
          name: 'Next.js',
        },
        {
          name: 'Firebase',
        },
        {
          name: 'Tailwind CSS',
        },
        {
          name: 'Auth0',
        },
        {
          name: 'React Flow',
        },
      ],
      thumbnail_url: 'https://raw.githubusercontent.com/Ashumaurya/Mapify/main/screenshots/Mapify.gif',
      hitCount: 242,
      createdAt: '2022-02-04T05:12:08.306Z',
      reactions: [],
      comments: [],
    },
    {
      id: '158',
      projectTitle: '혼술 패키지 프로젝트',
      description:
        '일상으로부터의 한칸, 당신의 한 장을 위한 혼술패키지\n누구나 혼자 집안에서 만족스러운 한 잔을 누릴수 있도록',
      owner_name: 'cuk-spacebar',
      directLink: 'https://github.com/cuk-spacebar/spacebar_web',
      tech_stacks: [
        {
          name: 'JavaScript',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
        {
          name: 'Arduino',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/55903679/147661848-c7f0dd4e-22ce-449a-a355-a968afbf8956.png',
      hitCount: 1154,
      createdAt: '2022-02-04T05:25:49.676Z',
      reactions: [
        {
          id: '300',
        },
      ],
      comments: [],
    },
    {
      id: '159',
      projectTitle: '안드로이드 캐주얼 게임 JUMPER',
      description: '오픈소스 기반 안드로이드 모바일 캐주얼 게임',
      owner_name: 'jumper-game',
      directLink: 'https://github.com/jumper-game/jumperoid',
      tech_stacks: [
        {
          name: 'Java',
        },
        {
          name: 'Android',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/55903679/147664317-b31c069d-5a99-4f65-ae14-488f234aed1c.png',
      hitCount: 406,
      createdAt: '2022-02-04T05:30:42.799Z',
      reactions: [],
      comments: [],
    },
    {
      id: '160',
      projectTitle: '제로웨이스트 프로젝트',
      description: '환경과 함께 하는 소비, 제로웨이스트와 함께 하세요',
      owner_name: 'Kim-jisoo11',
      directLink: 'https://github.com/Kim-jisoo11/Finalzebra',
      tech_stacks: [
        {
          name: 'Python',
        },
        {
          name: 'JavaScript',
        },
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/63868433/102681082-ee93db80-4201-11eb-84f4-f20717faa3f7.png',
      hitCount: 982,
      createdAt: '2022-02-04T05:35:40.678Z',
      reactions: [],
      comments: [],
    },
    {
      id: '161',
      projectTitle: '실시간 브레인스토밍 협업 플랫폼',
      description: '효율적인 아이디어 회의를 돕는 온라인 툴이자 브레인 스토밍을 함께하는 서비스입니다. ',
      owner_name: 'TEAMSTORMERS',
      directLink: 'https://github.com/TEAMSTORMERS/STORM_Android',
      tech_stacks: [
        {
          name: 'Kotlin',
        },
      ],
      thumbnail_url:
        'https://user-images.githubusercontent.com/55133871/87793056-b0277880-c87f-11ea-9f5a-62bcb3054a31.gif',
      hitCount: 1078,
      createdAt: '2022-02-04T17:26:48.811Z',
      reactions: [
        {
          id: '298',
        },
      ],
      comments: [],
    },
  ];
}
