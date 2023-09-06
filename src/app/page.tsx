import './globals.css'
import 'src/styles/top.scss'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        <header>
          <div>
            <ul>
              <li><a href="#top">About Me</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
            </ul>
          </div>
        </header>
        <div className="content" id="top">
          <section className="about">
            <h1>About Me / 自己紹介</h1>
            <dl>
              <dt>名前</dt>
              <dd>松山真梨子</dd>

              <dt>誕生日</dt>
              <dd>1993/4/7</dd>

              <dt>出身地</dt>
              <dd>沖縄県石垣市</dd>

              <dt>職務経歴</dt>
              <dd>
                <ul>
                  <li>
                    <p className="date">2022/10〜2023/5</p>
                    <p className="place">株式会社グラニフ</p>
                    <p className="intro">デザインプロダクトの企画、製造、販売等。フロントエンドエンジニアとしてLPの作成やWebページの運用更新を担当</p>
                  </li>

                  <li>
                    <p className="date">2021/8～2022/6</p>
                    <p className="place">ベルフェイス株式会社</p>
                    <p className="intro">オンライン営業システム「bellFace」の開発・販売。フロントエンドエンジニアとしてLPの作成やWebページの運用更新を担当、業務委託契約。</p>
                  </li>
                  <li>
                    <p className="date">2017/1～2021/6</p>
                    <p className="place">株式会社ヤプリ</p>
                    <p className="intro">スマートデバイスに特化したインターネット事業。<br/>
                      プロダクト開発チーム所属時：CMS管理画面のUIUX、フロント開発業務。基本フロント1名、サーバーサイド1名、アプリエンジニア2名、PM1名、デザイナー1名、QA約2名のチーム編成で作業していました。<br/>
                      クリエイティブチーム所属時：LP作成・webページの運用更新作業。デザイナー3名、コーダー1名のチームでした。
                    </p>
                  </li>
                  <li>
                    <p className="date">2015/1〜2016/12</p>
                    {/* <p className="place"></p> */}
                    <p className="intro">プレスリリース配信の会社やweb開発事業会社のSES出向先でサービスサイトのサイトデザインやコーディングを担当。
                    </p>
                  </li>

                  {/* <li>
                    <p className="date">2016/3〜2016/12</p>
                    <p className="place">株式会社テクノモバイル</p>
                    <p className="intro">web開発事業。SES出向先で医療系のウェブサイトデザインやコーディング、修正更新業務を担当。
                      3人体制 デザイナー兼コーダーとしてwebデザインを担当
                    </p>
                  </li>

                  <li>
                    <p className="date">2015/1〜2016/2</p>
                    <p className="place">株式会社バリュープレス</p>
                    <p className="intro">インターネット上におけるPR 活動支援業務。自社サービスサイトのサイトデザインやコーディングを担当。
                    </p>
                  </li> */}
                </ul>
              </dd>

              <dt>使えるもの</dt>
              <dd>Adobe Photoshop、Adobe Illustrator、HTML、CSS、jQuery、JavaScript、React.js、Vue.js、</dd>

              <dt>好きなもの</dt>
              <dd>ゲーム、脱出ゲーム、漫画、絵を描く</dd>

              <dt>クリフトンストレングス TOP5の資質</dt>
              <dd>
                <ol className="">
                  <li>慎重さ</li>
                  <li>個別化</li>
                  <li>原点思考</li>
                  <li>親密性</li>
                  <li>分析思考</li>
                </ol>
              </dd>
            </dl>
          </section>
          <section className="portfolio" id="portfolio">
            <h1>Portfolio / 関わったもの</h1>
            <ul className="card_wrapper">
              <li className="card">
                <div className="image_area">
                  <img src="/images/image_bellface01.png" />
                </div>
                <dl>
                  <dt>サイト名</dt>
                  <dd>bellFaceからリモートお申し込みプランが登場 | ベルフェイス (bellFace)</dd>
                  <dt>URL</dt>
                  <dd>https://bell-face.com/lp_remote-control/</dd>

                  <dt>GitHub</dt>
                  <dd><a href="https://github.com/bpm154o/portfolio/blob/main/src/app/(lp)/lp01/page.tsx" target="_blank">コード</a> : <a href="" target="_blank">ページ</a></dd>

                  <dt>担当箇所</dt>
                  <dd>ページ全体のコーディング</dd>
                </dl>
              </li>

              <li className="card">
                <div className="image_area">
                  <img src="/images/image_bellface02.png" />
                </div>
                <dl>
                  <dt>サイト名</dt>
                  <dd>サステナビリティ | ベルフェイス株式会社</dd>

                  <dt>URL</dt>
                  <dd>https://corp.bell-face.com/sustainability/</dd>

                  <dt>GitHub</dt>
                  <dd>-</dd>

                  <dt>担当箇所</dt>
                  <dd>ページ全体のコーディング</dd>
                </dl>
              </li>

              <li className="card">
                <div className="image_area">
                  <img src="/images/image_graniph01.png" />
                </div>
                <dl>
                  <dt>サイト名</dt>
                  <dd>オンラインストアリニューアル1周年｜グラニフ公式オンラインストア</dd>

                  <dt>URL</dt>
                  <dd>https://www.graniph.com/other/onlinestore-1st</dd>

                  <dt>GitHub</dt>
                  <dd>-</dd>

                  <dt>担当箇所</dt>
                  <dd>ページ全体のコーディング</dd>

                </dl>
              </li>

              <li className="card">
                <div className="image_area">
                  <img src="/images/image_graniph02.png" />
                </div>
                <dl>
                  <dt>サイト名</dt>
                  <dd>Health&Beautyシリーズ｜グラニフ公式オンラインストア</dd>

                  <dt>URL</dt>
                  <dd>https://www.graniph.com/other/health-beauty</dd>

                  <dt>GitHub</dt>
                  <dd>-</dd>

                  <dt>担当箇所</dt>
                  <dd>ページ全体のコーディング</dd>
                </dl>
              </li>

              <li className="card">
                <div className="image_area">
                  <img src="/images/image_graniph03.png" />
                </div>
                <dl>
                  <dt>サイト名</dt>
                  <dd>森永製菓×グラニフ コラボレーションアイテムスペシャルページ｜グラニフ公式オンラインストア</dd>

                  <dt>URL</dt>
                  <dd>https://www.graniph.com/other/morinaga-collaboration</dd>

                  <dt>GitHub</dt>
                  <dd>-</dd>

                  <dt>担当箇所</dt>
                  <dd>ページ全体のコーディング</dd>
                </dl>
              </li>
            </ul>
          </section>
        </div>
      </body>
    </html>
  )
}
