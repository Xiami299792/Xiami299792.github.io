---
title: 第二课
date: 2026-09-28
category: study
series: math-analysis
order: 2
summary: 曲线的参数方程与极坐标方程 · 极限的概念 · 数列的极限 · 子列
---

函数 $y=f(x)$ 在直角坐标系中的图形是曲线，而 $y=f(x)$ 称为曲线的直角坐标方程。实际中，有些曲线上 $x$ 与 $y$ 的直接关系难以得到，或者所得 $x$ 与 $y$ 之间的函数关系很复杂，也有一些曲线是物体的运动轨迹，我们需要将曲线上坐标 $(x,y)$ 与时间 $t$ 联系起来考虑问题，因此有必要引入曲线的另外两种方程——参数方程与极坐标方程。

## 七、曲线的参数方程与极坐标方程

### 1．曲线的参数方程

引进一个辅助变量 $t$，将曲线上点的坐标 $(x,y)$ 都表示成 $t$ 的函数 $x=x(t)$，$y=y(t)$，则

$$\begin{cases}x=x(t),\\ y=y(t)\end{cases}$$

称为曲线的参数方程，其中 $t$ 称为参变量或参数。

**例 9**（炮弹运动的轨道，即弹道曲线）　设 $v_1,v_2$ 分别表示炮弹的水平初速度和铅直初速度，$g$ 为重力加速度，$t$ 为时间，$x,y$ 分别为 $t$ 时刻炮弹在铅直平面上的横坐标和纵坐标，则在不计空气阻力的情况下，可以得到弹道曲线的参数方程

$$\begin{cases}x=v_1t,\\ y=v_2t-\dfrac12gt^2.\end{cases}$$

由第一式解得 $t=\dfrac{x}{v_1}$，代入第二式，消去参数 $t$，可得其直角坐标方程

$$y=\frac{v_2}{v_1}x-\frac{g}{2v_1^2}x^2.$$

弹道曲线的图形是抛物线。

**例 10**　椭圆 $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ 的参数方程为

$$\begin{cases}x=a\cos t,\\ y=b\sin t.\end{cases}$$

特别地，圆 $x^2+y^2=R^2$ 的参数方程为

$$\begin{cases}x=R\cos t,\\ y=R\sin t.\end{cases}$$

**例 11**　曲线 $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1\ (x>0)$ 的参数方程为

$$\begin{cases}x=a\,\mathrm{ch}\,t,\\ y=b\,\mathrm{sh}\,t.\end{cases}$$

如果记图中阴影部分的面积为 $S$，则有 $t=\dfrac{2S}{ab}$。这一点在学完了定积分之后会知晓。（这里用到的 $\mathrm{ch}\,t$、$\mathrm{sh}\,t$ 是双曲函数。）

**例 12**（摆线方程）　一半径为 $a$ 的圆，初始时其圆心位于点 $(0,a)$ 处，$P$ 是圆上一定点，初始时位于原点处，当圆沿 $x$ 轴正向做无滑动的滚动时，求 $P$ 的轨迹。

解　设点 $P$ 位于 $(x,y)$，圆的半径所转过的角度为 $t$，则

$$\begin{aligned}x&=OC-PB=\overset{\frown}{PC}-PB=at-a\sin t=a(t-\sin t),\\ y&=AC-AB=a-a\cos t=a(1-\cos t),\end{aligned}$$

因此得运动轨迹的参数方程

$$\begin{cases}x=a(t-\sin t),\\ y=a(1-\cos t).\end{cases}$$

此运动轨迹叫作摆线（也叫作旋轮线），它是以 $2\pi$ 为周期的。

**例 13**（星形线方程）　一个小圆在大圆内沿大圆做无滑动的滚动，设大圆圆心在原点，半径为 $4r$，小圆半径为 $r$，$P$ 是小圆上一定点，初始时，点 $P$ 在 $P_0(4r,0)$，求点 $P$ 的运动轨迹。

解　设定点由 $P_0$ 移动到 $P(x,y)$ 时，小圆与大圆的切点为 $N$，$ON$ 与 $x$ 轴正向的夹角为 $t$，设 $\angle PCN=\alpha$，$\angle PCD=\beta$，由 $\overset{\frown}{NP}=\overset{\frown}{NP_0}$，得 $r\alpha=4rt$，$\alpha=4t$，故

$$\beta=\pi-\alpha-\left(\frac{\pi}{2}-t\right)=\frac{\pi}{2}-3t,$$

$$x=OA+AB=3r\cos t+r\sin\beta=4r\cos^3t,$$

$$y=AC-CD=3r\sin t-r\cos\beta=4r\sin^3t.$$

记 $a=4r$，则 $P$ 点的运动轨迹为

$$\begin{cases}x=a\cos^3t,\\ y=a\sin^3t,\end{cases}$$

它的图形称为星形线或内摆线。消去参数 $t$ 后可得星形线的直角坐标方程

$$x^{\frac23}+y^{\frac23}=a^{\frac23}.$$

### 2．曲线的极坐标方程

在平面上取一个定点 $O$，称为极点，由 $O$ 点向右引一具有规定长度单位的水平射线 $Ox$，称为极轴。设 $M$ 是平面上任一点，将 $OM$ 的长度记作 $\rho$，极轴与 $OM$ 的夹角记作 $\theta$，则 $(\rho,\theta)$ 叫作点 $M$ 的极坐标。每一对 $(\rho,\theta)$ 确定一个点的位置。显然 $\rho\ge0$，而 $\theta$ 的取值范围通常规定为 $0\le\theta<2\pi$。

点 $M$ 的直角坐标 $(x,y)$ 与极坐标 $(\rho,\theta)$ 之间有如下关系：

$$\begin{cases}x=\rho\cos\theta,\\ y=\rho\sin\theta.\end{cases}$$

反之，由 $x^2+y^2=\rho^2$，得 $\rho=\sqrt{x^2+y^2}$；又 $\dfrac{y}{x}=\dfrac{\rho\sin\theta}{\rho\cos\theta}=\tan\theta$，故有

$$\begin{cases}\rho=\sqrt{x^2+y^2},\\[4pt] \tan\theta=\dfrac{y}{x}.\end{cases}$$

利用上述关系，可以将曲线的直角坐标方程与极坐标方程互相转化。

**例 14**　将下列圆的直角坐标方程化成极坐标方程。

（1）$x^2+y^2=a^2$；　　（2）$(x-a)^2+y^2=a^2$。

解　（1）由 $\rho^2=x^2+y^2$，原方程即 $\rho^2=a^2$，又 $\rho\ge0$，故得极坐标方程

$$\rho=a.$$

（2）将原方程展开得 $x^2+y^2=2ax$，代入 $x=\rho\cos\theta$、$x^2+y^2=\rho^2$，得 $\rho^2=2a\rho\cos\theta$。除极点（$\rho=0$）外约去 $\rho$，得极坐标方程

$$\rho=2a\cos\theta.$$

自然界中有很多量，直接去计算它们的精确值是很困难的，因此只能采取间接的方法，逼近法就是一种间接的方法。例如，公元前 3 世纪，古希腊的阿基米德在计算一些由曲线围成的图形面积 $A$ 时，先用 $n$ 个内接矩形的面积之和 $A_n$ 作为 $A$ 的近似值，再让 $n$ 无限变大，用 $A_n$ 去逼近 $A$ 的精确值。又如，3 世纪我国数学家刘徽的割圆术，即通过不断增加圆内接正多边形的边数来推算圆面积的方法，也是逼近的方法。这种逼近的方法就是极限思想在几何学上的应用。极限思想的引入是初等数学与高等数学的重要区别。

## 一、数列的极限

### 1．数列极限的定义

按照某种法则排列的无穷多个实数

$$y_1,y_2,y_3,\dots,y_n,\dots$$

叫作数列，简记为 $\{y_n\}$。$y_n$ 叫作数列的一般项，其中 $n$ 叫作数列的下标。

下面是一些数列的例子：（1）$1,\dfrac12,\dfrac13,\dots,\dfrac1n,\dots$，一般项 $y_n=\dfrac1n$；（2）$2,\dfrac12,\dfrac43,\dots,\dfrac{n+(-1)^{n+1}}{n},\dots$，一般项 $y_n=\dfrac{n+(-1)^{n+1}}{n}$；（3）$\dfrac12,1,\dfrac34,1,\dots$，一般项

$$y_n=\begin{cases}\dfrac{n}{n+1},&n=2k-1,\\ 1,&n=2k,\end{cases}\quad(k\ \text{是正整数}).$$

数列可以理解为定义域为自然数集 $\mathbb N$ 的函数，即

$$y_n=f(n),\quad n\in\mathbb N.$$

因此数列又可称为整标函数，它的图形是 $xOy$ 平面上无穷多个离散的点。

有一些数列，当 $n$ 无限增大时，$y_n$ 可以任意地接近于某个常数 $A$，在这种情况下，我们将数 $A$ 称为数列 $\{y_n\}$ 的极限，记作

$$\lim_{n\to\infty}y_n=A\quad\text{或}\quad y_n\to A\ (n\to\infty).$$

这种描述不能算是极限的定义，严格的定义后面才给出。先来考察几个有极限的数列和没有极限的数列。

**例 1**　（1）$\{y_n\}=\left\{\dfrac1n\right\}=1,\dfrac12,\dfrac13,\dfrac14,\dots$，由于当 $n$ 无限增大时，$y_n$ 任意地接近于常数 $0$，因此

$$\lim_{n\to\infty}y_n=\lim_{n\to\infty}\frac1n=0.$$

（2）$\{y_n\}=\left\{1-\dfrac1n\right\}=0,\dfrac12,\dfrac23,\dfrac34,\dfrac45,\dots$，由于当 $n$ 无限增大时，$y_n$ 任意地接近于常数 $1$，因此

$$\lim_{n\to\infty}y_n=\lim_{n\to\infty}\left(1-\frac1n\right)=1.$$

（3）$\{y_n\}=\left\{2+\dfrac{(-1)^n}{n}\right\}=1,\dfrac52,\dfrac53,\dfrac94,\dfrac95,\dfrac{13}{6},\dots$，由于当 $n$ 无限增大时，$y_n$ 任意地接近于常数 $2$，因此

$$\lim_{n\to\infty}y_n=\lim_{n\to\infty}\left[2+\frac{(-1)^n}{n}\right]=2.$$

（4）$y_n=\begin{cases}\dfrac1n,&n\ \text{为奇数},\\ \dfrac2n,&n\ \text{为偶数}\end{cases}=1,1,\dfrac13,\dfrac12,\dfrac15,\dfrac13,\dfrac17,\dfrac14,\dots$，由于当 $n$ 无限增大时，$y_n$ 任意地接近于常数 $0$，因此 $\lim\limits_{n\to\infty}y_n=0$。

（5）$y_n=\begin{cases}-1+\dfrac1n,&n\ \text{为奇数},\\ -1,&n\ \text{为偶数}\end{cases}=0,-1,-\dfrac23,-1,-\dfrac45,-1,-\dfrac67,-1,\dots$，由于当 $n$ 无限增大时，$y_n$ 任意地接近于常数 $-1$，因此 $\lim\limits_{n\to\infty}y_n=-1$。

**例 2**　数列 $\{y_n\}=\{n\}=1,2,3,\dots$ 是没有极限的，因为当 $n$ 无限增大时，$y_n$ 并不任意地接近某个常数。

前面关于数列 $\{y_n\}$ 与 $A$ 任意地接近的描述是很含糊的。主要是"当 $n$ 无限增大"以及"$\{y_n\}$ 与 $A$ 任意地接近"这些说法不是很明确，据此我们也无法去证明、去计算或进行理论推导。下面对有极限的数列做进一步的考察，以获得更深入的认识。

再次考察例 1 中的数列（3）$\{y_n\}=\left\{2+\dfrac{(-1)^n}{n}\right\}=1,\dfrac52,\dfrac53,\dfrac94,\dfrac95,\dfrac{13}{6},\dots$。在极限 $y=2$ 的上方与下方各做一条与 $y=2$ 等距离（将这个距离记为 $\varepsilon$）的直线 $y=2+\varepsilon$ 与 $y=2-\varepsilon$，不论 $\varepsilon$ 有多么小，我们总能在 $x$ 轴上找到一点 $N$（$N$ 是正数，但不一定是整数），使得在这个点右方，$\{y_n\}$ 的图形完全位于直线 $y=2+\varepsilon$ 与 $y=2-\varepsilon$ 所形成的水平带形域内，如果用数学式表示就是：

对 $\forall\varepsilon>0$，都 $\exists N>0$，使得当 $n>N$ 时，恒有 $|y_n-2|<\varepsilon$。

例如，当 $\varepsilon=0.1$，由于 $|y_n-2|=\left|\left(2+\dfrac{(-1)^n}{n}\right)-2\right|=\dfrac1n$，则只要 $N=10$，或 $N=11.5$（或其他大于 $10$ 的数），当 $n>N$ 时，恒有 $|y_n-2|<0.1$。当 $\varepsilon=0.05$，只要 $N=20$，或 $N=23.7$（或其他大于 $20$ 的数），则当 $n>N$ 时，恒有 $|y_n-2|<0.05$。

一般地，给出下面关于数列极限的严格定义（称为 $\varepsilon$-$N$ 定义）。

**定义 1**（数列的极限）　设数列 $\{y_n\}$，$A$ 是一常数，如果对于任意给定的正数 $\varepsilon$，都存在正数 $N$，使得当 $n>N$ 时，恒有 $|y_n-A|<\varepsilon$ 成立，则称数列 $\{y_n\}$ 以 $A$ 为极限，或者称数列 $\{y_n\}$ 收敛于 $A$，记作

$$\lim_{n\to\infty}y_n=A\quad\text{或}\quad y_n\to A\ (n\to\infty).$$

如果数列 $\{y_n\}$ 没有极限，则称数列 $\{y_n\}$ 不收敛，或称它是发散的。

$\varepsilon$ 是希腊字母，读作 epsilon，其相当于英文字母的 $e$，它是 error（误差）的头一个字母。误差任意小的数量提法也就是"小于任意给正数 $\varepsilon$"。极限的定义也就是把误差可以小到任意小这个唯一的要点明确地提出来。

极限的英文是 limit。$\lim\limits_{n\to\infty}y_n=A$ 读作"当 $n$ 无限增大时，$y_n$ 的极限等于（是、收敛于）$A$"。

也可以将定义中的"当 $n>N$ 时"说成"当 $n$ 充分大时"，将"$|y_n-A|<\varepsilon$"说成"$y_n$ 与 $A$ 任意地接近"。

从几何上看，$\lim\limits_{n\to\infty}y_n=A$ 就意味着，对 $\forall\varepsilon>0$，都 $\exists N>0$，使得当 $n>N$ 时，数列 $\{y_n\}$ 在 $N$ 右边的图形都位于直线 $y=A-\varepsilon$ 与 $y=A+\varepsilon$ 之间。

一个数列是否有极限，同它的前有限项的值是没有关系的。另外，对每个 $\varepsilon>0$，定义中的 $N$ 不是唯一的。通常，如果 $\varepsilon$ 改变了，$N$ 也要随之改变。

由定义中"当 $n>N$ 时恒有 $|y_n-A|<\varepsilon$"这一句，还可以直接读出收敛数列的几条性质。

落在直线 $y=A-\varepsilon$ 与 $y=A+\varepsilon$ 之外的项只有有限多个。这是因为当 $n>N$ 时，$\{y_n\}$ 的图形已经全部位于这两条直线之间，所以在带形域之外的至多是前 $N$ 项，而 $N$ 是一个确定的数。

由此得到：收敛数列必有界。

**证**　取 $\varepsilon=1$，则 $\exists N>0$，当 $n>N$ 时恒有 $|y_n-A|<1$，从而

$$|y_n|\le|y_n-A|+|A|<|A|+1.$$

而当 $n\le N$ 时只有有限项 $y_1,y_2,\dots,y_N$。记 $M=\max\{|y_1|,|y_2|,\dots,|y_N|,|A|+1\}$，则 $M>0$，且对 $\forall n\in\mathbb N$ 都有 $|y_n|\le M$，故 $\{y_n\}$ 有界。

反过来，有界不一定收敛。例如 $\{(-1)^n\}=-1,1,-1,1,\dots$ 是有界的，但它的奇数项子列收敛于 $-1$、偶数项子列收敛于 $1$，两个子列的极限不相同，所以它不收敛。把"收敛必有界"写成逆否命题，就得到：无界数列必发散。

收敛数列的极限还是唯一的。

**证**　设 $\{y_n\}$ 同时以 $A$ 和 $B$ 为极限，若 $A\ne B$，取 $\varepsilon=\dfrac{|A-B|}{2}$，则当 $n$ 充分大时，$|y_n-A|<\varepsilon$ 与 $|y_n-B|<\varepsilon$ 同时成立，于是

$$|A-B|=|(A-y_n)+(y_n-B)|\le|A-y_n|+|y_n-B|<\frac{|A-B|}{2}+\frac{|A-B|}{2}=|A-B|,$$

矛盾，故 $A=B$。

利用极限的 $\varepsilon$-$N$ 定义可以证明数列的极限。

**例 3**　证明：$\lim\limits_{n\to\infty}\dfrac{2+(-1)^n}{n+1}=0$。

**证**　对 $\forall\varepsilon>0$，只要 $N=\dfrac3\varepsilon$，则当 $n>N$ 时，总有

$$|y_n-0|=\left|\frac{2+(-1)^n}{n+1}\right|\le\frac{3}{n+1}<\frac3n<\varepsilon,$$

因此 $\lim\limits_{n\to\infty}\dfrac{2+(-1)^n}{n+1}=0$。

**例 4**　设 $y_n=\dfrac1{6n^2}-\dfrac1{2n}+\dfrac13$，证明：$\lim\limits_{n\to\infty}y_n=\dfrac13$。

**证**　对 $\forall\varepsilon>0$，只要 $N=\dfrac1{2\varepsilon}$，则当 $n>N$ 时，总有

$$\left|y_n-\frac13\right|=\left|\frac1{6n^2}-\frac1{2n}\right|=\frac{3n-1}{6n^2}<\frac{3n}{6n^2}=\frac1{2n}<\varepsilon,$$

故 $\lim\limits_{n\to\infty}y_n=\dfrac13$。

**例 5**　证明：$\lim\limits_{n\to\infty}\dfrac1{2^n}=0$。

**证**　对 $\forall\varepsilon>0$（不妨设 $\varepsilon<1$），只要取 $N=\dfrac{\ln\frac1\varepsilon}{\ln2}$，则当 $n>N$ 时，总有

$$|y_n-0|=\left|\frac1{2^n}-0\right|=\frac1{2^n}<\varepsilon,$$

故 $\lim\limits_{n\to\infty}\dfrac1{2^n}=0$。

### 2．数列极限与子列极限的关系

在数列 $\{y_n\}$ 中任意抽取无限多项并保持这些项在原数列 $\{y_n\}$ 中前后的次序，这样得到的数列称为原数列 $\{y_n\}$ 的一个子序列（简称子列）。如果将第 $k$ 次抽到的数记为 $y_{n_k}$，则所得子列为

$$\{y_{n_k}\}=y_{n_1},y_{n_2},y_{n_3},\dots,y_{n_k},\dots.$$

例如，由 $\{y_n\}$ 的奇数项构成的子列为

$$\{y_{2n-1}\}=y_1,y_3,y_5,\dots,y_{2n-1},\dots;$$

由 $\{y_n\}$ 的偶数项构成的子列为

$$\{y_{2n}\}=y_2,y_4,y_6,\dots,y_{2n},\dots.$$

下面的定理给出了数列的极限与其子列的极限之间的关系。

**定理 1**　如果数列 $\{y_n\}$ 收敛于 $A$，则 $\{y_n\}$ 的任一子列 $\{y_{n_k}\}$ 也收敛于 $A$。

**证**　由于 $\lim\limits_{n\to\infty}y_n=A$，对 $\forall\varepsilon>0$，$\exists N>0$，当 $n>N$ 时，总有 $|y_n-A|<\varepsilon$。故当 $k>N$ 时，必有 $n_k\ge k>N$，因此有 $|y_{n_k}-A|<\varepsilon$，所以 $\lim\limits_{k\to\infty}y_{n_k}=A$。定理得证。

由定理 1 可知，如果 $\{y_n\}$ 有一个子列是发散的，则 $\{y_n\}$ 也发散；如果 $\{y_n\}$ 有两个子列收敛于不同的极限，则 $\{y_n\}$ 一定是发散的。

**例 6**　下面数列是否有极限？

（1）$y_n=\begin{cases}2n,&n\ \text{是奇数},\\ \dfrac1n,&n\ \text{是偶数};\end{cases}$　　（2）$y_n=1+(-1)^n$。

解　（1）由于 $\lim\limits_{n\to\infty}y_{2n-1}=\lim\limits_{n\to\infty}(2n-1)$ 不存在，因此 $\lim\limits_{n\to\infty}y_n$ 不存在。

（2）$\lim\limits_{n\to\infty}y_{2n}=\lim\limits_{n\to\infty}2=2$，$\lim\limits_{n\to\infty}y_{2n-1}=\lim\limits_{n\to\infty}0=0$，由于 $\lim\limits_{n\to\infty}y_{2n}\ne\lim\limits_{n\to\infty}y_{2n-1}$，因此 $\lim\limits_{n\to\infty}y_n$ 不存在。

可以证明，若 $\{y_{n_k}\},\{y_{n_l}\},\dots,\{y_{n_m}\}$ 是数列 $\{y_n\}$ 的 $p$ 个子列，当这些子列都收敛于 $A$，并且这些子列构成的并集等于 $\{y_n\}$，则数列 $\{y_n\}$ 也收敛于 $A$。

例如，如果 $\lim\limits_{n\to\infty}y_{2n}=A$，$\lim\limits_{n\to\infty}y_{2n-1}=A$，则有 $\lim\limits_{n\to\infty}y_n=A$。

又如，如果 $\lim\limits_{n\to\infty}y_{3n-1}=A$，$\lim\limits_{n\to\infty}y_{3n-2}=A$，$\lim\limits_{n\to\infty}y_{3n}=A$，则有 $\lim\limits_{n\to\infty}y_n=A$。
