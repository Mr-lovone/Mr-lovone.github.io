document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
    <footer style="
        text-align: center;
        padding: 20px;
        margin-top: 40px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    ">
        <p style="
            margin: 0;
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
        ">
            <img src="/images/img/bei.png" 
                 style="width:15px; height:15px; margin-right:6px;" 
                 alt="备案图标">
            <a href="https://beian.mps.gov.cn/#/query/webSearch?code=32110202000752" 
               rel="noreferrer" 
               target="_blank" 
               style="color: rgba(255, 255, 255, 0.9); text-decoration: none;">苏公网安备32110202000752号</a>
            <span style="color: rgba(255, 255, 255, 0.7);">|</span>
            <a href="https://beiancx.miit.gov.cn/#/Integrated/recordQuery" 
               rel="noreferrer" 
               target="_blank" 
               style="color: rgba(255, 255, 255, 0.9); text-decoration: none;">豫ICP备2025148481号</a>
        </p>
        <p style="
            margin: 10px 0 0 0;
            color: rgba(255, 255, 255, 0.8);
            font-size: 13px;
        ">
            <span id="busuanzi_container_site_pv" style="display: inline-block;">
                本站总访问量 <span id="busuanzi_value_site_pv"></span> 次
            </span>
            <span style="margin: 0 10px;">|</span>
            <span id="busuanzi_container_site_uv" style="display: inline-block;">
                本站访客数 <span id="busuanzi_value_site_uv"></span> 人
            </span>
        </p>
    </footer>`;

    const body = document.body;
    body.insertAdjacentHTML('beforeend', footerHTML);

    const script = document.createElement('script');
    script.async = true;
    script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
    document.head.appendChild(script);
});
