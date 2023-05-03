"use strict";(self.webpackChunksuse_edge_docs=self.webpackChunksuse_edge_docs||[]).push([[713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),k=i,h=c["".concat(l,".").concat(k)]||c[k]||d[k]||s;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const s={sidebar_position:2,title:"K3s on SLE Micro"},r="Intro",o={unversionedId:"quickstart/k3s-on-slemicro",id:"quickstart/k3s-on-slemicro",title:"K3s on SLE Micro",description:"K3s",source:"@site/docs/quickstart/k3s-on-slemicro.md",sourceDirName:"quickstart",slug:"/quickstart/k3s-on-slemicro",permalink:"/quickstart/k3s-on-slemicro",draft:!1,editUrl:"https://github.com/suse-edge/suse-edge.github.io/tree/main/docs/quickstart/k3s-on-slemicro.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"K3s on SLE Micro"},sidebar:"docs",previous:{title:"SLE Micro on OSX on Apple Silicon (UTM)",permalink:"/quickstart/slemicro-utm-aarch64"},next:{title:"Elemental on OSX on Apple Silicon (UTM)",permalink:"/quickstart/elemental-utm-aarch64"}},l={},p=[{value:"K3s",id:"k3s",level:2},{value:"K3s on SLE Micro",id:"k3s-on-sle-micro",level:2},{value:"K3s all-in-one",id:"k3s-all-in-one",level:2},{value:"Adding agents",id:"adding-agents",level:2},{value:"K3s HA",id:"k3s-ha",level:2},{value:"K3s API HA",id:"k3s-api-ha",level:2},{value:"VIP reservation",id:"vip-reservation",level:3},{value:"K3s installation - First node",id:"k3s-installation---first-node",level:3},{value:"Kube-vip installation",id:"kube-vip-installation",level:3},{value:"K3s installation - Control-plane nodes",id:"k3s-installation---control-plane-nodes",level:3},{value:"Kubeconfig tweaks",id:"kubeconfig-tweaks",level:3},{value:"K3s installation - adding agents",id:"k3s-installation---adding-agents",level:3},{value:"Final picture",id:"final-picture",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intro"},"Intro"),(0,i.kt)("h2",{id:"k3s"},"K3s"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://k3s.io/"},"K3s")," is a highly available, certified Kubernetes distribution designed for production workloads in unattended, resource-constrained, remote locations or inside IoT appliances."),(0,i.kt)("p",null,"It is packaged as a single and small binary so installations and updates are fast and easy."),(0,i.kt)("p",null,"The installation procedure can be as simple as downloading the ",(0,i.kt)("inlineCode",{parentName:"p"},"k3s")," binary and run it.\nHowever, the prefered way is to use the install script as it creates and configures a service."),(0,i.kt)("p",null,"The script supports different installation parameters to customize K3s, including HA support, install control-plane nodes, dedicated etcd nodes, agents, etc."),(0,i.kt)("p",null,"Once installed, the parameters and flags can be modified, added or removed just by changing the systemd unit file or the config file and restarting the service. Neat!"),(0,i.kt)("h2",{id:"k3s-on-sle-micro"},"K3s on SLE Micro"),(0,i.kt)("p",null,"The installation scripts supports SLE Micro, it recognizes the underlying operating system, installs the ",(0,i.kt)("inlineCode",{parentName:"p"},"k3s-selinux")," package using ",(0,i.kt)("inlineCode",{parentName:"p"},"transactional-updates")," and creates the ",(0,i.kt)("inlineCode",{parentName:"p"},"k3s")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"k3s-agent")," services."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),": On SLE Micro, the install script doesn't start the ",(0,i.kt)("inlineCode",{parentName:"p"},"k3s")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"k3s-agent")," service (ideally you should reboot the host once you run a transactional-update), but this can be override by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_SKIP_START=false")," environment variable."),(0,i.kt)("h2",{id:"k3s-all-in-one"},"K3s all-in-one"),(0,i.kt)("p",null,"The simplest way to run K3s is an all-in-one server (not suited for production environments) is by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -sfL https://get.k3s.io | sh -\n")),(0,i.kt)("p",null,"A few environment variables to tweak our installation can be used as well as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --cluster-init --write-kubeconfig-mode=644" K3S_TOKEN=foobar sh -\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.k3s.io/installation/configuration#configuration-with-install-script"},"The settings can be specified either as environment variables, command line flags"),", a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.k3s.io/installation/configuration#configuration-file"},"configuration file"),", or both, it is just a personal choice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -sfL https://get.k3s.io | sh -s - server --token foobar --cluster-init --write-kubeconfig-mode=644\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'write-kubeconfig-mode: "0644"\ncluster-init: true\ntoken: "foobar"\n')),(0,i.kt)("p",null,"In this example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"write-kubeconfig-mode")," is self explanatory (the default is 0600)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cluster-init")," enables clustering by deploying an embedded etcd database"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token")," a random token is generated to be able to add nodes to the cluster, specifying it at installation time makes things easier as it is known upfront")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.k3s.io/cli"},"official")," documentation explains all the flags in detail."),(0,i.kt)("h2",{id:"adding-agents"},"Adding agents"),(0,i.kt)("p",null,"Adding an agent is as simple as running the install script with a few parameters, including the URL of the cluster as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -sfL https://get.k3s.io | K3S_URL=https://myserver:6443 K3S_TOKEN=foobar sh -\n")),(0,i.kt)("h2",{id:"k3s-ha"},"K3s HA"),(0,i.kt)("p",null,"The easiest way to run a K3s HA cluster is by installing a first node using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--cluster-init")," flag and then, start adding nodes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'# First node\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --cluster-init --write-kubeconfig-mode=644" K3S_TOKEN=foobar sh -\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'# Rest of the nodes\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --server https://myserver:6443 --write-kubeconfig-mode=644" K3S_TOKEN=foobar sh -\n')),(0,i.kt)("p",null,"Agent nodes can be added as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="agent --server https://myserver:6443" K3S_TOKEN=foobar sh -\n')),(0,i.kt)("p",null,"This is what a cluster with 3 control-plane nodes and 2 agents look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"NAME   STATUS   ROLES                       AGE     VERSION        INTERNAL-IP       EXTERNAL-IP   OS-IMAGE                          KERNEL-VERSION                 CONTAINER-RUNTIME\ncp01   Ready    control-plane,etcd,master   2m26s   v1.26.4+k3s1   192.168.205.99    <none>        SUSE Linux Enterprise Micro 5.4   5.14.21-150400.24.46-default   containerd://1.6.19-k3s1\ncp02   Ready    control-plane,etcd,master   98s     v1.26.4+k3s1   192.168.205.100   <none>        SUSE Linux Enterprise Micro 5.4   5.14.21-150400.24.46-default   containerd://1.6.19-k3s1\ncp03   Ready    control-plane,etcd,master   71s     v1.26.4+k3s1   192.168.205.101   <none>        SUSE Linux Enterprise Micro 5.4   5.14.21-150400.24.46-default   containerd://1.6.19-k3s1\nw01    Ready    <none>                      63s     v1.26.4+k3s1   192.168.205.102   <none>        SUSE Linux Enterprise Micro 5.4   5.14.21-150400.24.46-default   containerd://1.6.19-k3s1\nw02    Ready    <none>                      39s     v1.26.4+k3s1   192.168.205.103   <none>        SUSE Linux Enterprise Micro 5.4   5.14.21-150400.24.46-default   containerd://1.6.19-k3s1\n")),(0,i.kt)("h2",{id:"k3s-api-ha"},"K3s API HA"),(0,i.kt)("p",null,"The previous section lacks an important detail, the Kubernetes API is served by the 3 control-plane nodes, but the API certificate is generated just for the first node. If the first node is down, the clients needs their API endpoint to be tweaked to point to another node (i.e.- for ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),", using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-s")," flag or modifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file) and the certificate won't be accepted as it doesn't contain the IP/hostname of that other node (it can be forced to be ignored using ",(0,i.kt)("inlineCode",{parentName:"p"},"--insecure-skip-tls-verify=true")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," but that's not a good practice)."),(0,i.kt)("p",null,"Ideally a mechanism to expose the K3s API in a high availability scenario is required. This usually means running a load balancer outside of the K3s cluster to serve and redirect the requests to the K3s API endpoints, so if one of the servers fail, the load balancer will re-route the requests to the other ones. This solves the HA problem but it adds complexity as it requires an external service, which sometimes is not available (typically in non-cloud environments such as baremetal deployments)."),(0,i.kt)("p",null,"One approach can be to run a self-contained solution involving ",(0,i.kt)("a",{parentName:"p",href:"http://kube-vip.io/"},"kube-vip")," to expose the ",(0,i.kt)("a",{parentName:"p",href:"https://kube-vip.io/docs/usage/k3s/"},"K3s API")," over a virtual IP (optionally including a load balancer as well). This solves the HA problem but the certificate can still be a problem... but K3s got you covered. By using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--tls-san")," flag at K3s installation time, a list of IPs and/or hostnames can be provided for the certificate to be included as Subject Alternative Names, meaning the K3s API will be happily served from those IPs/hostnames, and if those are the ones being served by the VIP, the solution is now HA and certificate-proof! Let's see it in more detail in the next section."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," kube-vip can be used also to expose Kubernetes services, but this is out of scope of this document."),(0,i.kt)("h3",{id:"vip-reservation"},"VIP reservation"),(0,i.kt)("p",null,"The VIP needs to be an IP available in the same subnet than the one where the control plane hosts are running (this is technically not true for the VIP itself but for ",(0,i.kt)("a",{parentName:"p",href:"https://kube-vip.io/docs/about/architecture/#technologies"},"load-balancing"),")."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," If you are using OSX to virtualize the SLE Micro OS where K3s is going to be installed, you can see the dhcp leases in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/db/dhcpd_leases")," file and the subnet range in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/Library/Preferences/SystemConfiguration/com.apple.vmnet.plist")," one. You can use a free IP in that range, but if you find a way to reserve an IP in that range, please open a GitHub issue or a pull request with instructions to do it!."),(0,i.kt)("h3",{id:"k3s-installation---first-node"},"K3s installation - First node"),(0,i.kt)("p",null,"The first step is to install K3s in HA and using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--tls-san")," flag as well. This flag can be repeated many times, so in this example will be used to add both the IP (",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.205.10")," in this example) and the DNS name of the VIP (using ",(0,i.kt)("a",{parentName:"p",href:"https://sslip.io"},"sslip.io")," as a poor's man DNS):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --cluster-init --write-kubeconfig-mode=644 --tls-san=192.168.205.10 --tls-san=https://192.168.205.10.sslip.io" K3S_TOKEN=foobar sh -\n')),(0,i.kt)("p",null,"The rest of the nodes will be installed after kube-vip as the server URL for them to join the cluster will be the VIP."),(0,i.kt)("h3",{id:"kube-vip-installation"},"Kube-vip installation"),(0,i.kt)("p",null,"The official ",(0,i.kt)("a",{parentName:"p",href:"https://kube-vip.io/docs/usage/k3s/"},"kube-vip")," documentation explains the steps in more detail, but essentially it means creating the required resource files for kube-vip to run (RBAC and a DaemonSet) and leveraging ",(0,i.kt)("a",{parentName:"p",href:"https://docs.k3s.io/installation/packaged-components#auto-deploying-manifests-addons"},"K3s auto-deploy")," feature (aka. any manifest stored in a particular folder of the host ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests")," will be automatically deployed at the K3s service startup or when the file changes via something similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f"),") kube-vip will be executed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," In this case, the ",(0,i.kt)("inlineCode",{parentName:"p"},"--services")," flag for kube-vip won't be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'export VIP=192.168.205.10\ncat <<- EOF > /var/lib/rancher/k3s/server/manifests\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: kube-vip\n  namespace: kube-system\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  annotations:\n    rbac.authorization.kubernetes.io/autoupdate: "true"\n  name: system:kube-vip-role\nrules:\n  - apiGroups: [""]\n    resources: ["services", "services/status", "nodes", "endpoints"]\n    verbs: ["list","get","watch", "update"]\n  - apiGroups: ["coordination.k8s.io"]\n    resources: ["leases"]\n    verbs: ["list", "get", "watch", "update", "create"]\n---\nkind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: system:kube-vip-binding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: system:kube-vip-role\nsubjects:\n- kind: ServiceAccount\n  name: kube-vip\n  namespace: kube-system\n---\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  labels:\n    app.kubernetes.io/name: kube-vip-ds\n    app.kubernetes.io/version: v0.5.12\n  name: kube-vip-ds\n  namespace: kube-system\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: kube-vip-ds\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: kube-vip-ds\n        app.kubernetes.io/version: v0.5.12\n    spec:\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n            nodeSelectorTerms:\n            - matchExpressions:\n              - key: node-role.kubernetes.io/master\n                operator: Exists\n            - matchExpressions:\n              - key: node-role.kubernetes.io/control-plane\n                operator: Exists\n      containers:\n      - args:\n        - manager\n        env:\n        - name: vip_arp\n          value: "true"\n        - name: port\n          value: "6443"\n        - name: vip_interface\n          value: eth0\n        - name: vip_cidr\n          value: "32"\n        - name: cp_enable\n          value: "true"\n        - name: cp_namespace\n          value: kube-system\n        - name: vip_ddns\n          value: "false"\n        - name: vip_leaderelection\n          value: "true"\n        - name: vip_leaseduration\n          value: "5"\n        - name: vip_renewdeadline\n          value: "3"\n        - name: vip_retryperiod\n          value: "1"\n        - name: address\n          value: ${VIP}\n        - name: prometheus_server\n          value: :2112\n                - name: lb_enable\n                    value: "true"\n        image: ghcr.io/kube-vip/kube-vip:v0.5.12\n        imagePullPolicy: Always\n        name: kube-vip\n        securityContext:\n          capabilities:\n            add:\n            - NET_ADMIN\n            - NET_RAW\n      hostNetwork: true\n      serviceAccountName: kube-vip\n      tolerations:\n      - effect: NoSchedule\n        operator: Exists\n      - effect: NoExecute\n        operator: Exists\nEOF\n')),(0,i.kt)("h3",{id:"k3s-installation---control-plane-nodes"},"K3s installation - Control-plane nodes"),(0,i.kt)("p",null,"Once kube-vip is in place, the rest of the control-plane nodes can be added to the cluster by pointing them to the VIP as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'export VIP=192.168.205.10\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --server https://${VIP}:6443 --write-kubeconfig-mode=644" K3S_TOKEN=foobar sh -\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," For a real HA scenario, it is required for ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd")," to have an odd number of nodes, so it would be required to add two more control plae nodes."),(0,i.kt)("p",null,"After a while, the nodes will join the cluster successfully and an HA cluster will be ready."),(0,i.kt)("h3",{id:"kubeconfig-tweaks"},"Kubeconfig tweaks"),(0,i.kt)("p",null,"The kubeconfig file that is generated as part of the installation has localhost as the Kubernetes API endpoint, so in order to use it from outside, it needs to be changed to the VIP as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"scp 192.168.205.10:/etc/rancher/k3s/k3s.yaml ~/.kube/config && sed -i '' 's/127.0.0.1/192.168.205.10/g' ~/.kube/config && chmod 600 ~/.kube/config\n")),(0,i.kt)("h3",{id:"k3s-installation---adding-agents"},"K3s installation - adding agents"),(0,i.kt)("p",null,"Agents can be added as usual, pointing to the VIP address as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'export VIP=192.168.205.10\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="agent --server https://${VIP}:6443" K3S_TOKEN=foobar sh -\n')),(0,i.kt)("h3",{id:"final-picture"},"Final picture"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get nodes -o jsonpath=\"{.items[*].status.addresses[?(@.type=='InternalIP')].address}\"\n192.168.205.69 192.168.205.70 192.168.205.71 192.168.205.72 192.168.205.73%\n\nkubectl cluster-info\nKubernetes control plane is running at https://192.168.205.10:6443\n")),(0,i.kt)("p",null,"As you can see, the control plane IP is the VIP and the nodes have their own IP. Sweet!"))}d.isMDXComponent=!0}}]);