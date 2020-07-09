import Head from 'next/head'
import Layout from '../components/layout/layout'
import classNames from 'classnames'
import styles from '../styles/about.module.scss'

export default function About() {
  const aboutItem = 'hvr-grow'
  return (
    <Layout pageName="about">
      <div className={styles.about}>
        <Head>
          <title>关于我们</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className={styles.banner}>
            <label className={classNames(styles['banner-title'], 'animate__animated', 'animate__flipInX')}>
              <span className={styles['banner-title-annotate']}>关于</span>我们
            </label>
            <label className={classNames(styles['banner-text'], 'animate__animated', 'animate__flipInX')}>
              利用前端技术、高端服务、互联网化运营提升传统政务、企业级出行服务
            </label>
          </div>

          <div className={styles['about-me']}>
            <div className={styles['introduction']}>
              <div className={styles['introduction-content']}>
                <label className={styles['about-title']}>公司简介</label>
                <div className={styles['line']}></div>
                <label className={styles['about-text']}>
                  风驰出行（上饶优驰科技有限公司）定位高端品质出行，打造以高端专车、爱<br></br>
                  驰车主拼车为切入点的出行平台。业务起步利用平台独特背景，提供政务级、<br></br>
                  企业级出行为主，用前端技术、高端服务、互联网化运营提升传统政务、企业<br></br>
                  级出行服务。通过技术及研发投入、数据积累、大数据算法等提升平台智能化
                </label>
              </div>
              <img
                className={classNames(styles['introduction-img'], aboutItem)}
                src="/images/about/about-introduction.jpg"
              ></img>
            </div>

            <div className={styles['vision']}>
              <img className={classNames(styles['vision-img'], aboutItem)} src="/images/about/about-vision.jpg"></img>
              <div className={styles['vision-content']}>
                <label className={styles['about-title']}>公司愿景</label>
                <div className={styles['line']}></div>
                <label className={styles['about-text']}>通过先进科技，打造智能网联的高端出行平台</label>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
