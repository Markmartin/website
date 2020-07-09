import Head from 'next/head'
import Layout from '../components/layout/layout'
import classNames from 'classnames'
import styles from '../styles/travel.module.scss'

export default function Home() {
  const aboutItem = 'hvr-grow'
  return (
    <Layout pageName="travel">
      <div className={styles.travel}>
        <Head>
          <title>风驰出行</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className={styles.banner}>
            <img
              className={classNames(styles['banner-logo'], 'animate__animated', 'animate__pulse')}
              src="/images/travel/banner-travel-logo.png"
            ></img>
          </div>

          <div className={styles['banner-travel']}>
            <div className={styles['banner-travel-left']}>
              <img
                className={classNames(styles['banner-travel-car'], aboutItem)}
                src="/images/travel/banner-travel-car.png"
              ></img>
            </div>
            <div className={styles['banner-travel-right']}>
              <label className={styles['banner-travel-desc']}>
                <span className={styles['banner-travel-annotate']}>风驰出行</span>
                <span className={styles['banner-travel-no-annotate']}>
                  是以高端专车，爱驰车主拼<br></br>车为切入点的高端品质出行平台
                </span>
              </label>
              <div className={styles.line}></div>
              <label className={styles['banner-travel-text']}>
                业务起步利用平台独特背景，提供政务级、企业级出行为主，用前端<br></br>
                技术、高端服务、互联网化运营提升传统政务、企业级出行服务。通<br></br>
                过技术及研发投入、数据积累、大数据算法等提升平台智能化。 全面<br></br>
                构建智能出行生态，成为行业智慧出行引领者和智慧城市推动者。
              </label>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
