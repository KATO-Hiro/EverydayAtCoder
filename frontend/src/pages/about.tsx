import React from 'react';
import Link from "next/link";
import {
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import {
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles';

// See:
// https://material-ui.com/components/grid/
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 750,
    },
  }),
);

// TODO: Extract a external file.
const AtCoderLink = () => {
  return (
    <Link href="https://atcoder.jp/">
      <a
        target="_blank"
        rel="noreferrer"
      >
        AtCoder
      </a>
    </Link>
  );
};

const About = (props) => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />


      <Paper
        className={classes.paper}
      >
        {/* Header */}
        <Typography
          variant="h4"
          align="left"
          component="h1"
          gutterBottom
        >
          About
        </Typography>

        <Grid
          container
          spacing={2}
        >
          {/* About me */}
          <Grid item>
            <Typography
              variant="h5"
              align="left"
              component="h3"
              gutterBottom
            >
              Everyday Rated contests in AtCoder!
            </Typography>

            <ul>
              <li>
                <span>
                  <AtCoderLink />
                </span>

                のバーチャルコンテストの結果を利用して、レートの変動を見える化する非公式サービスです。
              </li>

              <li>
                バーチャルコンテストの参加モチベーションをさらに高めることを狙いとしています。
              </li>
            </ul>
          </Grid>

          {/* Pages */}
          <Grid item>
            <Typography
              variant="h5"
              align="left"
              component="h3"
              gutterBottom
            >
              Pages
            </Typography>

            <dl>
              <dt>
                Home
              </dt>
              <dd>
                ログイン画面、もしくは、バーチャルコンテストの成績に応じたレートの変動をグラフで表示します。
              </dd>

              <dt>
                Profile
              </dt>
              <dd>
                あなたの競技プログラミングに関する成績・経歴などに関するページです。
              </dd>

              <dt>
                Virtual Rating
              </dt>
              <dd>
                バーチャルコンテストの成績に応じたレートの変動をグラフで表示します。
              </dd>

              <dt>
                Contest History
              </dt>
              <dd>
                バーチャルコンテストの成績を一覧表で表示します。
              </dd>

              <dt>
                Settings
              </dt>
              <dd>
                本サービスを利用するにあたって、必要な設定を行うページです。
              </dd>

              <dt>
                About
              </dt>
              <dd>
                本サービスを紹介するページです。
              </dd>

              <dt>
                Links
              </dt>
              <dd>
                関連する外部リンクを紹介します。
              </dd>
            </dl>
          </Grid>

          {/* Usage */}
          <Grid item>
            <Typography
              variant="h5"
              align="left"
              component="h3"
              gutterBottom
            >
              Usage
            </Typography>

              <ol>
                <li>
                  <span>
                    <AtCoderLink />
                  </span>

                  でアカウントを作成した後に、バーチャルコンテストに参加します。
                </li>

                <li>
                  Google/GitHub/Twitterアカウントで、本サービスにログインします。
                </li>

                <li>
                  Virtual Rating(Home)ページ、もしくは、Contest Historyページに移動すると、レーティングが更新されます。
                </li>
              </ol>
          </Grid>

          {/* Note */}
          <Grid item>
            <Typography
              variant="h5"
              align="left"
              component="h3"
              gutterBottom
            >
              Note
            </Typography>

              <ul>
                <li>
                  レート計算の対象となるコンテストは、hogehogeです。順次、対象コンテストの種類・期間を拡張する予定です。
                </li>

                <li>
                  レートの更新処理を自動的に実行できるようにする予定です。
                </li>

                <li>
                  レートの更新処理には、1回のコンテストあたりfoo秒ほどかかります。
                </li>
              </ul>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default About;
