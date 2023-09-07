// import Image from 'next/image'
// import styles from 'app/globals.css'
import 'src/styles/lp.scss'

export default function Home() {
  return (
    <main>
      <div className="wrap">
        <section id="fv">
          <div className="w_inner">
            <div className="fv_top">
              <p className="fv_intro">bellFaceから<br className="sp"/><span className="orange">“リモートお申し込みプラン”</span>誕生。</p>
              <h1>オンライン営業で<br/>お申し込みまで<br className="sp" />完結！</h1>
              <div className="dl_wrap">
                <div className="dl_box">
                  <p className="dl_catch">【解決できること】<br/>【料金】<br/>【自社に合うか】</p>
                  <p className="dl_image">
                    <img src="/images/lp/lp01/rcBook_pc.png"/>
                  </p>
                </div>
                <div className="dl_button">
                  <a>今すぐ資料ダウンロード</a>
                </div>
              </div>
            </div>
            <p className="scroll"></p>
          </div>
        </section>

        <section id="sec_01">
          <div className="sec01_box01">
            <div className="box01_item01">
              <h2>営業の現場。顧客の約80%が<br/>“お申し込み”のプロセスは、<br /><span>「面倒だった」</span>と回答。
              </h2>
              <p>営業活動における、お申し込みのシーンで<br/>実際に顧客はどう感じているのでしょうか。</p>
            </div>
          </div>
          <div className="sec01_box02">
            <div className="box02_item01">
              <h3>「紙」と「Webフォーム」お申し込み<br className="sp"/>方法による差はあるのでしょうか？</h3>
              <ul className="item01_graph01">
                <li><h4><span>紙の書類でのお申し込み</span><br/>お申し込みの手続きをした際、<br/>何かしら面倒に感じましたか？</h4>
                <img src="/images/lp/lp01/sec01_graph01_01.png" /></li>
                <li><h4><span>Webフォームでのお申し込み</span><br/>お申し込みの手続きをした際、<br/>何かしら面倒に感じましたか？</h4> <img src="/images/lp/lp01/sec01_graph01_02.png"/></li>
              </ul>
              <span className="note">2021年 ベルフェイス調べ</span></div>
              <div className="box02_item02">
                <h3>では、何を“面倒”に<br className="sp"/>感じているのでしょうか？</h3>
                <ul className="item02_graph01">
                  <li><h4><span>紙の書類でのお申し込み</span><br/>面倒に感じたのはどんなシーンでしたか？</h4>
                    <img src="/images/lp/lp01/sec01_graph02_01.png"/></li>
                  <li><h4><span>Webフォームでのお申し込み</span><br/>面倒に感じたのはどんなシーンでしたか？</h4>
                    <img src="/images/lp/lp01/sec01_graph02_02.png"/></li>
                </ul>
                <span className="note">2021年 ベルフェイス調べ</span>
              </div>
            </div>
            <div className="sec01_box03">
              <h3>お申し込みをする、<br className="sp"/>その瞬間に多くの方が面倒を感じています。</h3>
              <div className="box03_item01">
                <h4>リモートお申し込みプランで、<br className="sp"/>成約プロセスを高速化！</h4>
                <ul className="item01_dlbox">
                  <li className="dlbox01">
                    <p className="dlbox01_title">ダウンロード資料でわかること</p>
                    <div className="dlbox01_body">
                      <ul>
                        <li>解決できること</li>
                        <li>料金</li>
                        <li>自社に合うか</li>
                        <li>機能、特長</li>
                        <li>使い方</li>
                        <li>仕様</li>
                      </ul>
                      <p className="image">
                        <img src="/images/lp/lp01/rcBook_pc.png"/>
                      </p>
                      <a className="dl_button">今すぐ資料ダウンロード</a>
                    </div>
                  </li>
                  <li className="dlbox02">
                    <p className="dlbox02_title">無料デモ体験でできること</p>
                    <div className="dlbox02_body">
                      <ul>
                        <li>実際に弊社営業から<br className="sp"/>デモを体感できる</li>
                        <li>その場で質問できる</li>
                      </ul>
                      <p className="image"><img src="/images/lp/lp01/sec01_operator.png"/></p>
                      <a className="dl_button">今すぐ無料デモ体験</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="sec_02">
            <div className="sec02_box01">
              <div className="box01_item01">
                <h2><span>“リモートお申し込みプラン”</span>なら<br/>お申し込みフェーズが<br/>ストレスフリー。</h2>
                <p>「口頭内示からお申し込み」フェーズを<br/>リアルタイムでフォロー。<br/>こんなメリットが生まれます。</p>
              </div>
            </div>
            <div className="sec02_box02">
              <div className="box02_item01">
                <h3>“リモートお申し込みプラン”が<br className="sp"/>もたらすメリット</h3>
                <ul>
                  <li className="item01_group">
                    <div className="circle">
                      <img src="/images/lp/lp01/sec02_01.png" className="number"/>
                      <p>失注率・離脱率の<br/>低下</p>
                      <img src="/images/lp/lp01/sec02_01_hand.png" className="bottom"/>
                    </div>
                    <p className="text">心変わり、競合への流出、<br className="sp"/>新たなネックの発生など<br className="sp"/>による<br className="pc"/>失注や離脱の防止</p>
                  </li>
                  <li className="item01_group">
                    <p className="text">契約見込み数の精度の向上、<br/>ビジネス推進スピードの向上、<br className="sp"/>キャッシュインフローの改善</p>
                    <div className="circle"><img src="/images/lp/lp01/sec02_02.png" className="number"/>
                      <p>リードタイムの<br/>短縮</p> <img src="/images/lp/lp01/sec02_02_hand.png" className="bottom"/>
                    </div>
                  </li>

                  <li className="item01_group">
                    <div className="circle">
                      <img src="/images/lp/lp01/sec02_03.png" className="number"/>
                      <p>対応コストの<br/>削減</p> <img src="/images/lp/lp01/sec02_03_hand.png" className="bottom"/>
                    </div>
                    <p className="text">「口頭内示からお申し込み」<br className="sp"/>フェーズにおける<br className="pc"/>営業対応コスト、<br className="sp"/>回収作業コストの削減</p>
                  </li>

                  <li className="item01_group">
                    <p className="text">オンラインで完結する<br/>スムーズでリアルタイムな<br className="sp"/>顧客体験の提供</p>
                    <div className="circle">
                      <img src="/images/lp/lp01/sec02_04.png" className="number"/>
                      <p>顧客体験の向上</p> <img src="/images/lp/lp01/sec02_04_hand.png" className="bottom"/>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="box02_item02">
                <h3>ストレスフリーのひみつ</h3>
                <p>これまで、システムやアプリケーションを用いて対面で実施していたお申し込みプロセスを<br/>オンライン営業の延長で完結することができます。</p>
                <div className="item02_image">
                  <img src="/images/lp/lp01/sec02_host-guest_pc.png" className="pc"/>
                  <img src="/images/lp/lp01/sec02_host-guest_sp.png" className="sp"/>
                </div>
              </div>
              <div className="box02_item03">
                <h3>現場を熟知したうれしい機能</h3>
                <ul>
                  <li><p>顧客側はインストールなどの<br/>事前準備が不要</p> <img src="/images/lp/lp01/sec02_function01.png"/></li>
                  <li><p>顧客が操作できるページは<br/>営業側で制限できる</p> <img src="/images/lp/lp01/sec02_function02.png"/></li>
                  <li><p>顧客がスマートフォンでも<br/>ご利用可能</p> <img src="/images/lp/lp01/sec02_function03.png"/></li>
                  <li><p>操作が記録されるので、<br/>トラブル発生時も調査ができる</p> <img src="/images/lp/lp01/sec02_function04.png"/></li>
                </ul>
              </div>
            </div>

            <div className="sec01_box03">
              <div className="box03_item01">
                <h4>リモートお申し込みプランで、<br className="sp"/>成約プロセスを高速化！</h4>
                <ul className="item01_dlbox">
                  <li className="dlbox01">
                    <p className="dlbox01_title">ダウンロード資料でわかること</p>
                    <div className="dlbox01_body">
                      <ul>
                        <li>解決できること</li>
                        <li>料金</li>
                        <li>自社に合うか</li>
                        <li>機能、特長</li>
                        <li>使い方</li>
                        <li>仕様</li>
                      </ul>
                      <p className="image"><img src="/images/lp/lp01/rcBook_pc.png"/></p>
                      <a className="dl_button">今すぐ資料ダウンロード</a>
                    </div>
                  </li>
                  <li className="dlbox02">
                    <p className="dlbox02_title">無料デモ体験でできること</p>
                    <div className="dlbox02_body">
                      <ul>
                        <li>実際に弊社営業から<br className="sp"/>デモを体感できる</li>
                        <li>その場で質問できる</li>
                      </ul>
                      <p className="image"><img src="/images/lp/lp01/sec01_operator.png"/></p>
                      <a className="dl_button">今すぐ無料デモ体験</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="sec_03">
            <div className="sec03_box01">
              <div className="box01_item01">
                <h2><span>“リモートお申し込みプラン”</span>で<br/>営業はもっと自由になる。</h2>
                <p>これまで「対面でないとむずかしい」と<br className="sp"/>思われていた<br className="pc"/>こんな営業手続きのシーン。<br/>“リモートお申し込みプラン”が<br className="sp"/>オンライン完結を実現します。</p>
              </div>
            </div>
            <div className="sec03_box02">
              <div className="box02_item01">
                <h3>こんなシーンで<br className="sp"/>“リモートお申し込みプラン”</h3>

                <ul>
                  <li><p>生命保険の契約手続き</p> <img src="/images/lp/lp01/sec03_scene01.png" className="bottom"/></li>
                  <li><p>通信回線・スマホのお申し込み</p> <img src="/images/lp/lp01/sec03_scene02.png" className="bottom"/></li>
                  <li><p>損害保険の支払い手続き</p> <img src="/images/lp/lp01/sec03_scene03.png" className="bottom"/></li>
                  <li><p>銀行窓口での契約手続き</p> <img src="/images/lp/lp01/sec03_scene04.png" className="bottom"/></li>
                  <li><p>コールセンターの顧客対応</p> <img src="/images/lp/lp01/sec03_scene05.png" className="bottom"/></li>
                  <li><p>電話営業のクロージング</p> <img src="/images/lp/lp01/sec03_scene06.png" className="bottom"/></li>
                </ul>
              </div>
              <div className="box02_item02">
                <h3>お客様のお声</h3>
                <div className="item02_company">
                  <div className="company_intro">
                    <img src="/images/lp/lp01/sec03_retty_logo.png" className="logo"/>
                    <p className="intro">口頭内示からお申し込み書<br className="sp"/>回収に至る<br className="pc"/>工数・コスト・<br className="sp"/>精神的負担を解消。<br/>機会損失リスクも低減。</p>
                    <p className="name">Retty株式会社</p>
                  </div>
                  <div className="company_voice">
                    当社の申込回収時の課題として、お客様に入力いただいた申込フォームのエラー箇所がわからないというものがありました。<br/>必須の項目が記載されていない、規約の確認が完了していない等、いくつか原因はあるのですが、お客様がどこで止まってしまっているのかが見えないため、お電話で案内していると「時間がないのであとでやっておきます」と切電されることもあり、その後の追客に時間を割かれてしまったり、時には失注してしまうこともありました。<br/>リモートコントロール機能を利用するようになり、<span>営業担当者のPCで入力画面を共有しながら、リアルタイムでお客様にも入力箇所を確認していただけるので入力ミスが減りました。</span>また課題であったエラー箇所も営業担当者が操作することで解消が容易であり、<span>スムーズに申込回収を行うことができるように</span>なりました。画面共有の要領で簡単に利用できるため、<span>現場からも便利という声が</span>多く上がりました。<br/>今後も顧客体験の向上や営業のリードタイム短縮を目指し、さらに活用を進めていきたいと思います。
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section id="sec_04">
            <div className="sec04_box01">
              <div className="box01_item01">
                <h2>私たちは、国内シェアNo.1の<br/>オンライン営業システム<br className="sp"/>「bellFace」の<br/>開発・販売を行う<br className="sp"/>ベルフェイス株式会社です。</h2>
                <p>営業プロセスのDX化を通じて、<br/>貴社の営業組織の課題を抽出し、<br className="sp"/>最適なDX戦略を共創します。</p>
                <a href="/" target="_blank">ベルフェイスのサービスサイトはこちら</a>
              </div>
            </div>
            <div className="sec01_box03">
              <div className="box03_item01">
                <h4>リモートお申し込みプランで、<br className="sp"/>成約プロセスを高速化！</h4>
                <ul className="item01_dlbox">
                  <li className="dlbox01">
                    <p className="dlbox01_title">ダウンロード資料でわかること</p>
                    <div className="dlbox01_body">
                      <p className="image"><img src="/images/lp/lp01/rcBook_pc.png"/></p>
                      <ul>
                        <li>解決できること</li>
                        <li>料金</li>
                        <li>自社に合うか</li>
                        <li>機能、特長</li>
                        <li>使い方</li>
                        <li>仕様</li>
                      </ul>
                      <a className="dl_button sp">今すぐ資料ダウンロード</a>
                    </div>
                  </li>
                  <li className="dlbox02">
                    <p className="dlbox02_title">無料デモ体験でできること</p>
                    <div className="dlbox02_body">
                      <ul>
                        <li>実際に弊社営業から<br className="sp"/>デモを<br className="pc"/>体感できる</li>
                        <li>その場で質問できる</li>
                      </ul>

                      <p className="image"><img src="/images/lp/lp01/sec01_operator.png"/></p><a className="dl_button sp">今すぐ無料デモ体験</a>

                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

      </div>
    </main>
    // フォームとフッター

  )
}
