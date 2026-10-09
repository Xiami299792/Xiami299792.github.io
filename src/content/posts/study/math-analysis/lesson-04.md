---
title: 第四课
date: 2026-09-29
category: study
series: math-analysis
order: 4
summary: 夹逼准则 · 第一个重要极限 · 单调有界准则 · 第二个重要极限 · 小结
---

## 一、夹逼准则

### 1．夹逼定理

**定理 1**（夹逼定理）

（1）如果在点 $x_0$ 的某个去心邻域内，有

$$g(x)\leqslant f(x)\leqslant h(x),$$

且 $\lim\limits_{x\to x_0}g(x)=\lim\limits_{x\to x_0}h(x)=A$，则 $\lim\limits_{x\to x_0}f(x)=A$；

（2）如果当 $|x|$ 充分大时（即 $\exists N>0$，当 $|x|>N$ 时），有

$$g(x)\leqslant f(x)\leqslant h(x),$$

且 $\lim\limits_{x\to\infty}g(x)=\lim\limits_{x\to\infty}h(x)=A$，则 $\lim\limits_{x\to\infty}f(x)=A$。

**证**（1）设当 $0<|x-x_0|<\delta_1$ 时，$g(x)\leqslant f(x)\leqslant h(x)$。

对 $\forall\varepsilon>0$，由于 $\lim\limits_{x\to x_0}g(x)=A$，$\exists\delta_2>0$，当 $0<|x-x_0|<\delta_2$ 时 $|g(x)-A|<\varepsilon$，即

$$A-\varepsilon<g(x)<A+\varepsilon.$$

由于 $\lim\limits_{x\to x_0}h(x)=A$，$\exists\delta_3>0$，当 $0<|x-x_0|<\delta_3$ 时 $|h(x)-A|<\varepsilon$，即

$$A-\varepsilon<h(x)<A+\varepsilon.$$

令 $\delta=\min\{\delta_1,\delta_2,\delta_3\}$，则当 $0<|x-x_0|<\delta$ 时，有

$$A-\varepsilon<g(x)\leqslant f(x)\leqslant h(x)<A+\varepsilon,$$

即 $|f(x)-A|<\varepsilon$，故 $\lim\limits_{x\to x_0}f(x)=A$。

（2）设当 $|x|>N_1$ 时，$g(x)\leqslant f(x)\leqslant h(x)$。

对 $\forall\varepsilon>0$，由于 $\lim\limits_{x\to\infty}g(x)=A$，$\exists N_2>0$，当 $|x|>N_2$ 时 $|g(x)-A|<\varepsilon$，即

$$A-\varepsilon<g(x)<A+\varepsilon;$$

由于 $\lim\limits_{x\to\infty}h(x)=A$，$\exists N_3>0$，当 $|x|>N_3$ 时 $|h(x)-A|<\varepsilon$，即

$$A-\varepsilon<h(x)<A+\varepsilon.$$

令 $N=\max\{N_1,N_2,N_3\}$，则当 $|x|>N$ 时上面三组不等式同时成立，于是

$$A-\varepsilon<g(x)\leqslant f(x)\leqslant h(x)<A+\varepsilon,$$

即 $|f(x)-A|<\varepsilon$，故 $\lim\limits_{x\to\infty}f(x)=A$。

定理 1 的两个结论证法相同：三个条件各自给出一个自变量范围，结论在这个范围的**公共部分**上成立。$x\to x_0$ 时三个范围都以 $x_0$ 为中心，故取 $\delta=\min\{\delta_1,\delta_2,\delta_3\}$；$x\to\infty$ 时三个范围都在原点之外，故取 $N=\max\{N_1,N_2,N_3\}$。

对自变量的其他趋向以及数列有同样的结论。数列的情形即：当 $n>N$ 时，有 $y_n\leqslant x_n\leqslant z_n$，且 $\lim\limits_{n\to\infty}y_n=\lim\limits_{n\to\infty}z_n=A$，则 $\lim\limits_{n\to\infty}x_n=A$。

当 $n\to\infty$ 时，量 $\sqrt[n]{a}$，$\sqrt[n]{n}$，$\sqrt[n]{n^k}$（$a>0$，$k>0$）均收敛到常数 $1$（可以使用夹逼定理进行证明）。这几个极限前面是直接引用过来的，下面用夹逼准则把它们补出来。

**（i）$\lim\limits_{n\to\infty}\sqrt[n]{a}=1$（$a>0$）**

$a=1$ 时显然。$a>1$ 时，令 $\sqrt[n]a=1+\alpha_n$，则 $\alpha_n>0$，由二项式定理展开（除前两项外其余各项均非负，略去它们后所得的和不大于原式）：

$$a=(1+\alpha_n)^n=1+n\alpha_n+\frac{n(n-1)}{2}\alpha_n^2+\dots\geqslant1+n\alpha_n,$$

于是 $0<\alpha_n\leqslant\dfrac{a-1}{n}$。由 $\lim\limits_{n\to\infty}\dfrac{a-1}{n}=0$ 与夹逼准则得 $\lim\limits_{n\to\infty}\alpha_n=0$，即 $\lim\limits_{n\to\infty}\sqrt[n]a=1$。

$0<a<1$ 时，$\dfrac1a>1$，用上面已证的情形：

$$\lim_{n\to\infty}\sqrt[n]{a}=\lim_{n\to\infty}\frac{1}{\sqrt[n]{1/a}}=\frac11=1.$$

**（ii）$\lim\limits_{n\to\infty}\sqrt[n]{n}=1$**

$n>1$ 时令 $\sqrt[n]n=1+\beta_n$，则 $\beta_n>0$。仍由二项式定理，这次只保留含 $\beta_n^2$ 的那一项（其余各项均非负，略去后所得的和不大于原式）：

$$n=(1+\beta_n)^n\geqslant\frac{n(n-1)}{2}\beta_n^2,$$

于是 $0<\beta_n^2\leqslant\dfrac{2}{n-1}$，即 $0<\beta_n\leqslant\sqrt{\dfrac{2}{n-1}}$。由 $\sqrt{\dfrac{2}{n-1}}\to0$ 与夹逼准则得 $\beta_n\to0$，即 $\lim\limits_{n\to\infty}\sqrt[n]n=1$。

**（iii）$\lim\limits_{n\to\infty}\sqrt[n]{n^k}=1$（$k>0$）**

$k$ 为**正整数**时，$\sqrt[n]{n^k}=(\sqrt[n]n)^k$，由（ii）与极限的乘法法则即得；$k$ 为一般的正实数时，要用到幂函数 $x^k$ 的连续性，留到后面再补。

而在同一极限过程中，$\sqrt[n]{c^n}\to c$，$c$ 为任意实数；$\sqrt[n]{n!}$，$\sqrt[n]{n^n}$ 均为无穷大量（$\sqrt[n]{n^n}$ 就是 $n$ 本身）。

利用夹逼准则求极限，关键是构造出 $\{y_n\}$ 与 $\{z_n\}$（或 $g(x)$ 与 $h(x)$），并且它们的极限是容易求的。

### 2．第一个重要极限

**例 1** 求 $\lim\limits_{x\to0}\dfrac{\sin x}{x}$。

**解**　这是 $\dfrac00$ 型不定式，现采用夹逼准则求此极限。当 $0<x<\dfrac{\pi}{2}$，作一单位圆（图 1-29），设圆心角 $\angle AOB=x$，$BD\perp OA$，过 $A$ 作单位圆的切线交 $OB$ 的延长线于 $C$，则 $BD=\sin x$，弧 $AB$ 的长为 $x$，$AC=\tan x$。因为

$$S_{\triangle AOB}<S_{\text{扇形}AOB}<S_{\triangle AOC},$$

所以

$$\frac12\sin x<\frac12x<\frac12\tan x,\quad\text{即}\quad \sin x<x<\tan x.$$

同除以 $\sin x$，得 $1<\dfrac{x}{\sin x}<\dfrac{1}{\cos x}$，即

$$\cos x<\frac{\sin x}{x}<1.$$

因为 $\lim\limits_{x\to0^+}\cos x=1$，$\lim\limits_{x\to0^+}1=1$，由夹逼定理得

$$\lim_{x\to0^+}\frac{\sin x}{x}=1.$$

令 $u=-x$，得

$$\lim_{x\to0^-}\frac{\sin x}{x}=\lim_{u\to0^+}\frac{\sin u}{u}=1,$$

合起来得到

$$\lim_{x\to0}\frac{\sin x}{x}=1.$$

此式是本节给出的第一个重要极限。函数 $y=\dfrac{\sin x}{x}$ 在 $x=0$ 处没有定义，但当 $x\to0$ 时函数值趋于 $1$；在 $0<x<\dfrac{\pi}{2}$ 内，它的图象位于直线 $y=1$ 与曲线 $y=\cos x$ 之间，这就是上面夹逼准则的几何含义。

**这个极限的特点**

| 特点 | 说明 |
| --- | --- |
| 类型 | 是 $\dfrac00$ 型未定式 |
| 结构 | $\sin$ 后面的整个式子，与分母上的整个式子，必须完全相同 |

只要满足这两条，就有

$$\lim_{\varphi(x)\to0}\frac{\sin\varphi(x)}{\varphi(x)}=1.$$

例如令 $\varphi(x)=3x$，得 $\lim\limits_{x\to0}\dfrac{\sin 3x}{3x}=1$；令 $\varphi(x)=x^2$，得 $\lim\limits_{x\to0}\dfrac{\sin x^2}{x^2}=1$。由它又得到倒数形式

$$\lim_{x\to0}\frac{x}{\sin x}=1,\qquad \lim_{x\to0}\frac{x}{\tan x}=1.$$

### 3．夹逼准则与第一个重要极限的应用

**例 2** 求下列极限：

（1）$\lim\limits_{x\to0}\dfrac{\tan x}{x}$；　（2）$\lim\limits_{x\to0}\dfrac{x}{\sin3x}$；　（3）$\lim\limits_{x\to0}\dfrac{\arcsin x}{x}$；　（4）$\lim\limits_{x\to0}\dfrac{\arctan x}{x}$；　（5）$\lim\limits_{x\to0}\dfrac{1-\cos x}{x^2}$；　（6）$\lim\limits_{x\to0}\dfrac{\cos x-\cos2x}{x^2}$。

**解**

（1）

$$\lim_{x\to0}\frac{\tan x}{x}=\lim_{x\to0}\frac{\sin x}{x}\cdot\frac{1}{\cos x}=\lim_{x\to0}\frac{\sin x}{x}\cdot\lim_{x\to0}\frac{1}{\cos x}=1.$$

（2）

$$
\begin{aligned}
\lim_{x\to0}\frac{x}{\sin3x}
&=\lim_{x\to0}\frac13\cdot\frac{3x}{\sin3x}
=\frac13\lim_{x\to0}\frac{3x}{\sin3x}\quad(\text{令 }u=3x)\\
&=\frac13\lim_{u\to0}\frac{u}{\sin u}=\frac13.
\end{aligned}
$$

（3）令 $u=\arcsin x$，由于当 $x\to0$ 时，有 $u\to0$，得

$$\lim_{x\to0}\frac{\arcsin x}{x}=\lim_{u\to0}\frac{u}{\sin u}=1.$$

（4）令 $u=\arctan x$，由于当 $x\to0$ 时，有 $u\to0$，得

$$\lim_{x\to0}\frac{\arctan x}{x}=\lim_{u\to0}\frac{u}{\tan u}=1.$$

（5）

$$
\begin{aligned}
\lim_{x\to0}\frac{1-\cos x}{x^2}
&=\lim_{x\to0}\frac{2\sin^2\frac{x}{2}}{x^2}
=\lim_{x\to0}\frac12\left(\frac{\sin\frac{x}{2}}{\frac{x}{2}}\right)^2\quad(\text{令 }u=\frac{x}{2})\\
&=\frac12\lim_{u\to0}\left(\frac{\sin u}{u}\right)^2=\frac12.
\end{aligned}
$$

（6）

$$
\begin{aligned}
\lim_{x\to0}\frac{\cos x-\cos2x}{x^2}
&=\lim_{x\to0}\frac{(1-\cos2x)-(1-\cos x)}{x^2}\\
&=\lim_{x\to0}\frac{1-\cos2x}{x^2}-\lim_{x\to0}\frac{1-\cos x}{x^2}\\
&=4\lim_{x\to0}\frac{1-\cos2x}{(2x)^2}-\frac12=4\times\frac12-\frac12=\frac32.
\end{aligned}
$$

**例 3** 求 $\lim\limits_{x\to0}\dfrac{\sin^3\sqrt[3]{x}}{3x}$。

**解**　把分母凑成与分子同形，再整体取三次方：

$$\lim_{x\to0}\frac{\sin^3\sqrt[3]{x}}{3x}=\frac13\lim_{x\to0}\left(\frac{\sin\sqrt[3]{x}}{\sqrt[3]{x}}\right)^3=\frac13\cdot1^3=\frac13.$$

这里 $\varphi(x)=\sqrt[3]{x}$，当 $x\to0$ 时 $\varphi(x)\to0$，满足第一个重要极限的条件。

**例 4** 设 $y_n=\dfrac{1}{n^2+1}+\dfrac{2}{n^2+2}+\dots+\dfrac{n}{n^2+n}$，求 $\lim\limits_{n\to\infty}y_n$。

**解**　分别将 $y_n$ 适当放大和缩小，再利用夹逼定理。

把每一项的分母都换小成 $n^2$（分母变小，分式变大），得

$$y_n<\frac{1}{n^2}+\frac{2}{n^2}+\dots+\frac{n}{n^2}=\frac{\frac12n(n+1)}{n^2}=\frac{n+1}{2n};$$

把每一项的分母都换大成 $n^2+n$（分母变大，分式变小），得

$$y_n\geqslant\frac{1}{n^2+n}+\frac{2}{n^2+n}+\dots+\frac{n}{n^2+n}=\frac{\frac12n(n+1)}{n^2+n}=\frac12.$$

由于

$$\lim_{n\to\infty}\frac{n+1}{2n}=\frac12,\qquad \lim_{n\to\infty}\frac12=\frac12,$$

由夹逼准则得

$$\lim_{n\to\infty}y_n=\frac12.$$

**例 5** 求 $\lim\limits_{n\to\infty}\left(\dfrac{1}{\sqrt{n^2+1}}+\dfrac{1}{\sqrt{n^2+2}}+\dots+\dfrac{1}{\sqrt{n^2+n}}\right)$。

**解**　每一项的分母都介于 $\sqrt{n^2+1}$ 与 $\sqrt{n^2+n}$ 之间，共有 $n$ 项，于是

$$\frac{n}{\sqrt{n^2+n}}<\frac{1}{\sqrt{n^2+1}}+\frac{1}{\sqrt{n^2+2}}+\dots+\frac{1}{\sqrt{n^2+n}}<\frac{n}{\sqrt{n^2+1}}.$$

又

$$
\lim_{n\to\infty}\frac{n}{\sqrt{n^2+n}}=\lim_{n\to\infty}\frac{1}{\sqrt{1+\frac1n}}=1,\qquad
\lim_{n\to\infty}\frac{n}{\sqrt{n^2+1}}=\lim_{n\to\infty}\frac{1}{\sqrt{1+\frac1{n^2}}}=1.
$$

由夹逼定理得

$$\lim_{n\to\infty}\left(\frac{1}{\sqrt{n^2+1}}+\frac{1}{\sqrt{n^2+2}}+\dots+\frac{1}{\sqrt{n^2+n}}\right)=1.$$

## 二、单调有界准则

### 1．单调有界准则

如果数列 $\{y_n\}$ 满足 $y_{n+1}\geqslant y_n$，$n=1,2,\dots$，则称 $\{y_n\}$ 是**单调增加**的。如果数列 $\{y_n\}$ 满足 $y_{n+1}\leqslant y_n$，$n=1,2,\dots$，则称 $\{y_n\}$ 是**单调减少**的。单调增加数列与单调减少数列统称**单调数列**。下面给出极限存在的另一个准则。

**定理 2**（单调有界准则）

如果数列 $\{y_n\}$ 单调增加，且有上界，即存在数 $M$，使得 $y_n\leqslant M$（$n=1,2,\cdots$），则 $\lim\limits_{n\to\infty}y_n$ 一定存在；如果数列 $\{y_n\}$ 单调减少，且有下界，即存在数 $M$，使得 $y_n\geqslant M$（$n=1,2,\cdots$），则 $\lim\limits_{n\to\infty}y_n$ 一定存在。

正文写"定理 2 的证明要用到实数的完备性，此处从略"。本节标题中"几个关于区间和极限的基本定理"，指的即是实数的完备性。下面把这段补出。

#### 实数的完备性

实数集的完备性可以表述为：实数集对极限运算封闭，不会出现"有上界的数集没有上确界"这种情形。最常用来操作的一条是**确界原理**：

> **确界原理**　非空有上界的数集必有上确界；非空有下界的数集必有下确界。

这里数 $A$ 叫作数集 $S$ 的**上确界**（记作 $\sup S$），是指两件事：

① $A$ 是 $S$ 的上界，即对一切 $x\in S$ 都有 $x\leqslant A$；

② $A$ 是 $S$ 的**最小**上界，即比 $A$ 小的任何数都不是 $S$ 的上界。

有理数集不满足确界原理。例如 $S=\{x\in\mathbf Q:x^2<2\}$ 在 $\mathbf Q$ 内有上界（如 $2$），但在 $\mathbf Q$ 内没有上确界：$\mathbf Q$ 中并不存在这样的数，它既是 $S$ 的上界，又小于 $S$ 的所有其他上界（这个位置应当由 $\sqrt2$ 占据，而 $\sqrt2\notin\mathbf Q$）。实数集满足确界原理，这是实数集与有理数集的关键差别。

实数完备性有好几种彼此等价的说法，任取其一作出发点，其余都能推出来：

| 名称 | 内容 |
| --- | --- |
| 确界原理 | 非空有上界的数集必有上确界 |
| 单调有界定理 | 单调有界数列必有极限（就是定理 2） |
| 区间套定理 | 若闭区间列 $\{[a_n,b_n]\}$ 满足 $[a_{n+1},b_{n+1}]\subset[a_n,b_n]$ 且 $b_n-a_n\to0$，则存在唯一的 $\xi$ 属于所有这些闭区间 |
| 柯西收敛准则 | 数列 $\{y_n\}$ 收敛 $\iff$ 对 $\forall\varepsilon>0$，$\exists N>0$，当 $m,n>N$ 时 $\lvert y_m-y_n\rvert<\varepsilon$ |
| 聚点定理（致密性定理） | 有界数列必有收敛子列 |
| 有限覆盖定理 | 闭区间上的任一开覆盖都含有限子覆盖 |

下面取**确界原理**作出发点，证明定理 2。这也说明定理 2 并不是"显然"的，它的分量全压在实数的完备性上。

#### 定理 2 的证明

只证"单调增加且有上界"这一种情形；"单调减少且有下界"的情形把 $\{y_n\}$ 换成 $\{-y_n\}$ 即归入已证情形（$y_n\geqslant M$ 给出 $-y_n\leqslant-M$，故 $\{-y_n\}$ 单调增加且有上界）。

设 $\{y_n\}$ 单调增加且有上界。令

$$S=\{y_1,y_2,\dots\},$$

则 $S$ 非空且有上界，由确界原理，$S$ 有上确界。记 $A=\sup S$。

下面证 $\lim\limits_{n\to\infty}y_n=A$。对 $\forall\varepsilon>0$：

① 因为 $A$ 是 $S$ 的上界，所以对一切 $n$ 都有 $y_n\leqslant A<A+\varepsilon$；

② 因为 $A-\varepsilon<A$，而 $A$ 是 $S$ 的最小上界，所以 $A-\varepsilon$ **不是** $S$ 的上界。也就是说，$S$ 中至少有一个数比 $A-\varepsilon$ 大，把这一个记作 $y_N$，即 $y_N>A-\varepsilon$。又因 $\{y_n\}$ 单调增加，当 $n>N$ 时 $y_n\geqslant y_N>A-\varepsilon$。

两件事合起来，当 $n>N$ 时

$$A-\varepsilon<y_n<A+\varepsilon,\quad\text{即}\quad \lvert y_n-A\rvert<\varepsilon.$$

按数列极限的定义，$\lim\limits_{n\to\infty}y_n=A$。证毕。

证明中只有第②步用到完备性：$A=\sup S$ 的存在性由确界原理保证，其余各步只用上界与最小上界的定义。若把范围限制在有理数集内，确界原理不成立，定理 2 也不再成立。例如取 $\sqrt2$ 的不足近似值 $y_1=1$，$y_2=1.4$，$y_3=1.41$，$y_4=1.414$，$\dots$，它在有理数范围内单调增加且有上界 $2$，但没有极限。

由于数列 $\{y_n\}$ 是否有极限同 $\{y_n\}$ 的前有限项无关，故定理 2 对单调性的要求可放宽到：当 $n$ 充分大时 $\{y_n\}$ 单调。

对函数极限，也可以给出相应的单调有界准则。设函数 $f(x)$ 在区间 $[a,+\infty)$ 有定义，如果当 $x$ 充分大时 $f(x)$ 单调增加（严格或不严格都可以），且有上界，则 $\lim\limits_{x\to+\infty}f(x)$ 一定存在；如果当 $x$ 充分大时 $f(x)$ 单调减少（严格或不严格都可以），且有下界，则 $\lim\limits_{x\to+\infty}f(x)$ 一定存在。

对 $x\to-\infty$，$x\to x_0^-$，$x\to x_0^+$ 有类似的结论。例如，设函数在点 $x_0$ 的某个右邻域内单调并且有界，则 $f(x)$ 在点 $x_0$ 的右极限必定存在。

要注意，函数的情形**只有单侧**的单调有界准则。右邻域内单调有界只能推出右极限存在，左邻域内单调有界只能推出左极限存在；把"右邻域"换成**去心邻域**，命题就不再成立。例如分段函数

$$f(x)=\begin{cases}x,&x<0,\\x+1,&x>0,\end{cases}$$

在 $0$ 的去心邻域 $(-1,1)\setminus\{0\}$ 内**严格**单调增加，且 $\lvert f(x)\rvert<2$ 有界，可是 $x\to0$ 时左极限为 $0$、右极限为 $1$，两者不等，所以 $\lim\limits_{x\to0}f(x)$ 不存在。可见左极限与右极限各自存在，推不出双侧极限存在。

定理 2 指出了极限的存在性，至于如何求极限需借助其他方法。其实在某些场合下，我们并不要求具体计算出极限值，只要能判定极限存在就可以了。

**例 6** 设 $x_1=\sqrt2$，$x_{n+1}=\sqrt{2+x_n}$（$n=1,2,\dots$），证明数列 $\{x_n\}$ 有极限，并求出极限值。

**解**　先证有界性：由 $x_1=\sqrt2<2$，若 $x_n<2$，则 $x_{n+1}=\sqrt{2+x_n}<\sqrt4=2$，故由归纳法知

$$0<x_n<2\quad(n=1,2,\dots).$$

**证法一（单调有界准则）**

证明 $\{x_n\}$ 单调增加。因 $x_n>0$，改由 $x_{n+1}^2-x_n^2$ 的符号判定：

$$x_{n+1}^2-x_n^2=(2+x_n)-x_n^2=-(x_n-2)(x_n+1)>0,$$

（右边大于 $0$，是因为 $x_n<2$ 使 $x_n-2<0$，而 $x_n+1>0$。）又 $x_{n+1}+x_n>0$，所以

$$x_{n+1}-x_n=\frac{x_{n+1}^2-x_n^2}{x_{n+1}+x_n}>0,$$

即 $\{x_n\}$ 单调增加。单调增加且有上界 $2$，由单调有界准则，$\lim\limits_{n\to\infty}x_n$ 存在。

设 $\lim\limits_{n\to\infty}x_n=a$。在 $x_{n+1}=\sqrt{2+x_n}$ 两端取极限，得 $a=\sqrt{2+a}$，解得 $a^2-a-2=0$，即 $a=2$ 或 $a=-1$。又因 $x_n>0$，故 $a\geqslant0$，舍去 $a=-1$，得

$$\lim_{n\to\infty}x_n=2.$$

**证法二（递推不等式，直接得到极限值）**

把递推式两边同时减去 $2$，再作分子有理化：

$$
\begin{aligned}
|x_{n+1}-2|
&=\bigl|\sqrt{2+x_n}-2\bigr|
=\left|\frac{(\sqrt{2+x_n}-2)(\sqrt{2+x_n}+2)}{\sqrt{2+x_n}+2}\right|\\
&=\frac{|x_n-2|}{\sqrt{2+x_n}+2}.
\end{aligned}
$$

因为 $\sqrt{2+x_n}\geqslant0$，分母 $\sqrt{2+x_n}+2>2$，所以

$$|x_{n+1}-2|<\frac12|x_n-2|.$$

不断递推下去：

$$|x_n-2|\leqslant\frac12|x_{n-1}-2|\leqslant\frac{1}{2^2}|x_{n-2}-2|\leqslant\dots\leqslant\frac{1}{2^{n-1}}|x_1-2|.$$

当 $n\to\infty$ 时，$\dfrac{1}{2^{n-1}}\to0$，于是 $\lim\limits_{n\to\infty}|x_n-2|=0$，可以直接得到

$$\lim_{n\to\infty}x_n=2.$$

证法二由不等式直接得到极限值，不必预先证明极限存在；证法一只用单调有界准则，不需预先知道极限值即可判定极限存在，极限值再由两端取极限求出。

### 2．第二个重要极限

**例 7** 讨论下列极限的存在性。

（1）$\lim\limits_{n\to\infty}\left(1+\dfrac1n\right)^n$；　（2）$\lim\limits_{x\to\infty}\left(1+\dfrac1x\right)^x$。

**解**（1）设 $y_n=\left(1+\dfrac1n\right)^n$，$\lim\limits_{n\to\infty}y_n=\lim\limits_{n\to\infty}\left(1+\dfrac1n\right)^n$ 是 $1^\infty$ 型不定式。

下面证明 $\{y_n\}$ 单调且有上界。根据二项式定理，有

$$
\begin{aligned}
y_n=\left(1+\frac1n\right)^n
&=1+n\cdot\frac1n+\frac{n(n-1)}{2!}\cdot\frac{1}{n^2}+\frac{n(n-1)(n-2)}{3!}\cdot\frac{1}{n^3}+\dots+\\
&\quad\frac{n(n-1)\dots(n-k+1)}{k!}\cdot\frac{1}{n^k}+\dots+
\frac{n(n-1)(n-2)\dots(n-n+1)}{n!}\cdot\frac{1}{n^n}\\
&=1+1+\frac1{2!}\left(1-\frac1n\right)+\frac1{3!}\left(1-\frac1n\right)\left(1-\frac2n\right)+\dots+\\
&\quad\frac1{k!}\left(1-\frac1n\right)\left(1-\frac2n\right)\dots\left(1-\frac{k-1}{n}\right)+\dots+\\
&\quad\frac1{n!}\left(1-\frac1n\right)\left(1-\frac2n\right)\dots\left(1-\frac{n-1}{n}\right).
\end{aligned}
$$

同理

$$
\begin{aligned}
y_{n+1}=1+1&+\frac1{2!}\left(1-\frac1{n+1}\right)+\frac1{3!}\left(1-\frac1{n+1}\right)\left(1-\frac2{n+1}\right)+\\
&\dots+\frac1{k!}\left(1-\frac1{n+1}\right)\left(1-\frac2{n+1}\right)\dots\left(1-\frac{k-1}{n+1}\right)+\dots+\\
&\quad\frac1{n!}\left(1-\frac1{n+1}\right)\left(1-\frac2{n+1}\right)\dots\left(1-\frac{n-1}{n+1}\right)+\\
&\quad\frac1{(n+1)!}\left(1-\frac1{n+1}\right)\left(1-\frac2{n+1}\right)\dots\left(1-\frac{n}{n+1}\right).
\end{aligned}
$$

比较 $y_n$ 与 $y_{n+1}$ 右边各项，除前两项相等外，从第三项开始，$y_n$ 的每一项都小于 $y_{n+1}$ 的对应项（因为 $1-\dfrac{k-1}{n}<1-\dfrac{k-1}{n+1}$），$y_{n+1}$ 还多了最后一项（此项大于 $0$），因此

$$y_n<y_{n+1}\quad(n=1,2,3,\cdots),$$

即 $\{y_n\}$ 单调增加。

根据 $y_n$ 的展开式，把每个括号都放大成 $1$，得

$$
\begin{aligned}
y_n&\leqslant1+1+\frac1{2!}+\frac1{3!}+\dots+\frac1{n!}
\leqslant1+1+\frac12+\frac1{2^2}+\dots+\frac1{2^{n-1}}\\
&=1+\frac{1-\left(\frac12\right)^n}{1-\frac12}=3-\frac{1}{2^{n-1}}<3,
\end{aligned}
$$

即 $\{y_n\}$ 有上界。因此 $\lim\limits_{n\to\infty}y_n=\lim\limits_{n\to\infty}\left(1+\dfrac1n\right)^n$ 存在。用 $e$ 来表示这个极限，即

$$\lim_{n\to\infty}\left(1+\frac1n\right)^n=e.$$

$\{y_n\}$ 的单调性与有界性还可以各用一条已知不等式来证。先把这两条不等式证出来。

#### 均值不等式

> **均值不等式**（算术—几何平均不等式）　设 $a_1,a_2,\dots,a_m$ 都是正数，则
> $$\frac{a_1+a_2+\dots+a_m}{m}\geqslant\sqrt[m]{a_1a_2\cdots a_m},$$
> 等号成立当且仅当 $a_1=a_2=\dots=a_m$。

**证**　分三步。

**第一步：$m=2$ 时成立。** 对任意正数 $a,b$，

$$(\sqrt a-\sqrt b)^2\geqslant0\ \Longrightarrow\ a+b\geqslant2\sqrt{ab}\ \Longrightarrow\ \frac{a+b}{2}\geqslant\sqrt{ab},$$

且等号成立当且仅当 $\sqrt a=\sqrt b$，即 $a=b$。

**第二步：$m$ 成立 $\Rightarrow$ $2m$ 成立。** 把 $2m$ 个正数分成两组：$a_1,\dots,a_m$ 与 $a_{m+1},\dots,a_{2m}$，记两组的算术平均分别为 $A_1$、$A_2$。由归纳假设

$$A_1\geqslant\sqrt[m]{a_1\cdots a_m},\qquad A_2\geqslant\sqrt[m]{a_{m+1}\cdots a_{2m}}.$$

再把第一步用在 $A_1$、$A_2$ 这两个正数上，并接上上面两个不等式：

$$\frac{a_1+\dots+a_{2m}}{2m}=\frac{A_1+A_2}{2}\geqslant\sqrt{A_1A_2}\geqslant\sqrt{\sqrt[m]{a_1\cdots a_m}\cdot\sqrt[m]{a_{m+1}\cdots a_{2m}}}=\sqrt[2m]{a_1\cdots a_{2m}}.$$

**第三步：$m$ 成立 $\Rightarrow$ $m-1$ 成立（往回退一位）。** 给定 $m-1$ 个正数 $a_1,\dots,a_{m-1}$，记它们的算术平均为 $A$，再补上第 $m$ 个数 $a_m=A$，凑成 $m$ 个数。对这 $m$ 个数用归纳假设，注意补进去的那个数正好使算术平均仍是 $A$：

$$A=\frac{a_1+\dots+a_{m-1}+A}{m}\geqslant\sqrt[m]{a_1\cdots a_{m-1}A}.$$

两边取 $m$ 次方得 $A^m\geqslant a_1\cdots a_{m-1}A$，约去 $A>0$，得 $A^{m-1}\geqslant a_1\cdots a_{m-1}$，即

$$A\geqslant\sqrt[m-1]{a_1\cdots a_{m-1}}.$$

由第一、二步得 $m=2,4,8,\dots$ 全部成立。对任意 $m\geqslant2$，取正整数 $k$ 使 $2^k\geqslant m$，由第三步从 $2^k$ 逐次递减到 $m$，即得 $m$ 的情形。等号成立当且仅当 $a_1=a_2=\dots=a_m$：第一步要求两个数相等；第二步要求 $A_1=A_2$ 且两组内各自全相等；第三步要求补入的那个数与其余各数相等，逐次归结即得。

**单调增加：用均值不等式**　对下面 $n+1$ 个正数用均值不等式：$1+\dfrac1n$ 取 $n$ 个（它们相等），再添一个 $1$。算术平均为

$$\frac{n\left(1+\frac1n\right)+1}{n+1}=\frac{n+2}{n+1}=1+\frac1{n+1},$$

几何平均为

$$\left[\left(1+\frac1n\right)^n\cdot1\right]^{\frac1{n+1}}.$$

因为这 $n+1$ 个数不全相等（那个 $1$ 与 $1+\dfrac1n$ 不同），均值不等式里的等号取不到，于是取严格不等号：

$$1+\frac1{n+1}>\left(1+\frac1n\right)^{\frac{n}{n+1}},$$

两边取 $n+1$ 次方，得

$$\left(1+\frac1{n+1}\right)^{n+1}>\left(1+\frac1n\right)^n,$$

即 $y_{n+1}>y_n$，$\{y_n\}$ 单调增加。

#### 对数不等式

> **对数不等式**　对 $t>0$，$\ln(1+t)<t$。

它等价于 $e^t>1+t$。因为 $y=e^x$ 与 $y=\ln x$ 互为反函数，故 $e^{\ln(1+t)}=1+t$；又 $y=e^x$ 单调增加，所以在不等式 $\ln(1+t)<t$ 两边同时取以 $e$ 为底的幂，不等号方向不变：

$$\ln(1+t)<t\iff e^{\ln(1+t)}<e^{t}\iff 1+t<e^t.$$

所以只要证 $e^t>1+t$（$t>0$）。

**证**　任取整数 $n\geqslant2$，把 $\left(1+\dfrac tn\right)^n$ 用二项式定理展开。除 $1$、$t$ 与 $t^2$ 三项外，其余各项均非负，略去它们后所得的和不大于原式：

$$\left(1+\frac tn\right)^n=1+t+\frac{n(n-1)}{2}\cdot\frac{t^2}{n^2}+\dots\geqslant1+t+\frac{n-1}{2n}t^2\geqslant1+t+\frac{t^2}{4},$$

最后一步用了 $n\geqslant2$ 时 $\dfrac{n-1}{2n}\geqslant\dfrac14$。令 $n\to\infty$：把左边写成 $\left[\left(1+\dfrac tn\right)^{\frac nt}\right]^{t}$，括号内趋于 $e$，所以左边趋于 $e^t$；右边 $1+t+\dfrac{t^2}{4}$ 与 $n$ 无关。由**保序性**得

$$e^t\geqslant1+t+\frac{t^2}{4}>1+t\quad(t>0).$$

于是 $\ln(1+t)<t$。证毕。

（这条不等式也可以等讲了幂级数之后，由 $\ln(1+t)=t-\dfrac{t^2}{2}+\dfrac{t^3}{3}-\dots$（$0<t\leqslant1$）直接看出。上面给的是只用第二个重要极限与保序性的证法。）

**有上界：用对数不等式**　取 $t=\dfrac1n$，得 $n\ln\left(1+\dfrac1n\right)<1$，于是

$$y_n=\left(1+\frac1n\right)^n=e^{\,n\ln\left(1+\frac1n\right)}<e<3,$$

即 $\{y_n\}$ 有上界（$e=2.718\,281\cdots<3$）。

这两条证法都比正文的短，但各有前提：均值不等式那条要先证出均值不等式；对数不等式那条要先有 $e$ 与 $\ln$，而按正文的次序，$e$ 正是本例要引出的量。另外，对数不等式这条证法中的"有上界"用到的界是常数 $e$ 本身，若以 $e$ 的定义来自本例，这一步即构成循环；正文那条证法（$y_n<3-\frac1{2^{n-1}}<3$）只用二项式定理与等比求和，不依赖后面才引入的 $e$ 与 $\ln$。

（2）当 $x\to+\infty$ 时，记 $[x]=n$，则 $n\leqslant x<n+1$，当 $x\to+\infty$ 时，有 $n\to\infty$，并且有不等式

$$1+\frac1{n+1}<1+\frac1x\leqslant1+\frac1n,$$

从而

$$\left(1+\frac1{n+1}\right)^n<\left(1+\frac1x\right)^x<\left(1+\frac1n\right)^{n+1}.$$

由于

$$
\begin{aligned}
\lim_{n\to\infty}\left(1+\frac1{n+1}\right)^n
&=\lim_{n\to\infty}\left(1+\frac1{n+1}\right)^{n+1}\left(1+\frac1{n+1}\right)^{-1}=e\times1=e,\\
\lim_{n\to\infty}\left(1+\frac1n\right)^{n+1}&=\lim_{n\to\infty}\left(1+\frac1n\right)^n\left(1+\frac1n\right)=e\times1=e,
\end{aligned}
$$

根据夹逼准则，得

$$\lim_{x\to+\infty}\left(1+\frac1x\right)^x=e.$$

当 $x\to-\infty$ 时，有

$$
\begin{aligned}
\lim_{x\to-\infty}\left(1+\frac1x\right)^x
&=\lim_{x\to-\infty}\left(\frac{x+1}{x}\right)^x
=\lim_{x\to-\infty}\left(\frac{x}{x+1}\right)^{-x}\\
&=\lim_{x\to-\infty}\left(1+\frac{-1}{x+1}\right)^{-x}\quad(\text{令 }u=-(x+1))\\
&=\lim_{u\to+\infty}\left(1+\frac1u\right)^{u+1}
=\lim_{u\to+\infty}\left(1+\frac1u\right)^u\left(1+\frac1u\right)=e\times1=e.
\end{aligned}
$$

因此得到另一个重要极限

$$\lim_{x\to\infty}\left(1+\frac1x\right)^x=e.$$

如果令 $t=\dfrac1x$，则当 $x\to\infty$ 时，$t\to0$，故有

$$\lim_{x\to\infty}\left(1+\frac1x\right)^x=\lim_{t\to0}(1+t)^{\frac1t},$$

因此第二个重要极限的另一种形式为

$$\lim_{x\to0}(1+x)^{\frac1x}=e.$$

函数 $y=\left(1+\dfrac1x\right)^x$ 在 $x>0$ 与 $x<-1$ 两段区间上有定义，图象以直线 $y=e$ 为水平渐近线：$x\to+\infty$ 与 $x\to-\infty$ 时，曲线都趋于这条直线。

可证明，$e$ 是一个无理数，它的值为 $e=2.718281828459045\cdots$。至于如何计算 $e$ 的值，待学完级数一章自会明白。

**这个极限的特点**

| 特点 | 说明 |
| --- | --- |
| 类型 | 是 $1^\infty$ 型未定式 |
| 结构 | 括号中 $1$ 后的变量（包括符号）与幂互为倒数 |

若极限呈 $1^\infty$ 型，但不具备第二个特点，则通常凑指数幂，使它具备第二个特点。这个极限可以概括为：以 $1$ 加非零无穷小为底，指数取该无穷小的倒数，极限为 $e$。一般有

$$\lim_{\varphi(x)\to0}[1+\varphi(x)]^{\frac1{\varphi(x)}}=e.$$

### 3．第二个重要极限的应用

**例 8** 求下列极限：

（1）$\lim\limits_{x\to+\infty}\left(1-\dfrac1x\right)^{\sqrt{x}}$；　（2）$\lim\limits_{x\to0}(1+x)^{\frac{3}{\sin x}}$；　（3）$\lim\limits_{x\to\infty}\left(\dfrac{x+1}{x-2}\right)^x$；　（4）$\lim\limits_{x\to0}\cos x^{\frac{1}{\sin^2x}}$。

**解**　四个极限均为 $1^\infty$ 型不定式。

（1）

$$\lim_{x\to+\infty}\left(1-\frac1x\right)^{\sqrt{x}}=\lim_{x\to+\infty}\left[\left(1-\frac1x\right)^{-x}\right]^{\frac{-\sqrt{x}}{x}}=e^0=1.$$

（2）

$$\lim_{x\to0}(1+x)^{\frac{3}{\sin x}}=\lim_{x\to0}\left[(1+x)^{\frac1x}\right]^{\frac{3x}{\sin x}}=e^3.$$

（3）

$$
\begin{aligned}
\lim_{x\to\infty}\left(\frac{x+1}{x-2}\right)^x
&=\lim_{x\to\infty}\left[1+\left(\frac{x+1}{x-2}-1\right)\right]^x
=\lim_{x\to\infty}\left(1+\frac{3}{x-2}\right)^x\\
&=\lim_{x\to\infty}\left[\left(1+\frac{3}{x-2}\right)^{\frac{x-2}{3}}\right]^{\frac{3x}{x-2}}=e^3.
\end{aligned}
$$

（4）

$$
\begin{aligned}
\lim_{x\to0}\cos x^{\frac{1}{\sin^2x}}
&=\lim_{x\to0}(\cos^2x)^{\frac{1}{2\sin^2x}}
=\lim_{x\to0}\left[(1-\sin^2x)^{\frac{-1}{\sin^2x}}\right]^{-\frac12}=e^{-\frac12}.
\end{aligned}
$$

**例 9** 求 $\lim\limits_{x\to\infty}\left(1-\dfrac1x\right)^x$。

**解**

$$\lim_{x\to\infty}\left(1-\frac1x\right)^x=\lim_{x\to\infty}\left[\left(1+\frac1{-x}\right)^{-x}\right]^{-1}=e^{-1}=\frac1e.$$

**例 10** 求 $\lim\limits_{x\to\infty}\left(\dfrac{3+x}{2+x}\right)^{2x}$。

**解**

$$
\lim_{x\to\infty}\left(\frac{3+x}{2+x}\right)^{2x}=\lim_{x\to\infty}\left(1+\frac{1}{x+2}\right)^{2x}
=\lim_{x\to\infty}\left[\left(1+\frac1{x+2}\right)^{x+2}\right]^{\frac{2x}{x+2}}=e^2.
$$

**例 11** 求下列极限：

（1）$\lim\limits_{x\to0}\dfrac{\ln(1+x)}{x}$；　（2）$\lim\limits_{x\to0}\dfrac{e^x-1}{x}$；　（3）$\lim\limits_{x\to0}\dfrac{a^x-1}{x}$；　（4）$\lim\limits_{x\to0}\dfrac{(1+x)^\alpha-1}{x}$（$\alpha$ 是非零常数）。

**解**

（1）把 $\dfrac{\ln(1+x)}{x}$ 写成 $\ln(1+x)^{\frac1x}$：

$$\lim_{x\to0}\frac{\ln(1+x)}{x}=\lim_{x\to0}\ln(1+x)^{\frac1x}=\ln e=1.$$

（2）令 $u=e^x-1$，则当 $x\to0$ 时 $u\to0$，且 $x=\ln(1+u)$，于是

$$\lim_{x\to0}\frac{e^x-1}{x}=\lim_{u\to0}\frac{u}{\ln(1+u)}=\frac{1}{\lim\limits_{u\to0}\frac{\ln(1+u)}{u}}=1.$$

（3）当 $a>0$，$a\neq1$ 时，$a^x-1=e^{x\ln a}-1$。令 $u=x\ln a$，则当 $x\to0$ 时 $u\to0$，于是

$$\lim_{x\to0}\frac{a^x-1}{x}=\lim_{x\to0}\frac{e^{x\ln a}-1}{x\ln a}\cdot\ln a=\ln a\cdot\lim_{u\to0}\frac{e^u-1}{u}=\ln a.$$

（4）令 $u=(1+x)^\alpha-1$，则 $\ln(1+u)=\alpha\ln(1+x)$，且当 $x\to0$ 时 $u\to0$，于是

$$
\lim_{x\to0}\frac{(1+x)^\alpha-1}{x}
=\lim_{x\to0}\frac{u}{\ln(1+u)}\cdot\alpha\cdot\frac{\ln(1+x)}{x}
=1\cdot\alpha\cdot1=\alpha.
$$

> 注：原文在例 11 的题干处中断，上面四问的解答是**按本节已给的第二个重要极限与换元法补出**的，**待你确认**是否为课本原解。

## 三、小结

两个准则：

| 准则 | 条件 | 结论 |
| --- | --- | --- |
| 夹逼准则 | 在同一极限过程中 $g(x)\leqslant f(x)\leqslant h(x)$（数列则 $y_n\leqslant x_n\leqslant z_n$），且 $g,h$（或 $y_n,z_n$）的极限同为 $A$ | $\lim f(x)=A$（或 $\lim x_n=A$） |
| 单调有界准则 | 数列单调增加且有上界，或单调减少且有下界 | 极限一定存在（值另求） |

两个重要极限：

| 极限 | 未定式类型 | 结构要求 |
| --- | --- | --- |
| $\lim\limits_{\varphi(x)\to0}\dfrac{\sin\varphi(x)}{\varphi(x)}=1$ | $\dfrac00$ 型 | $\sin$ 后面的 $\varphi(x)$ 与分母的 $\varphi(x)$ 完全一致 |
| $\lim\limits_{\varphi(x)\to0}[1+\varphi(x)]^{\frac1{\varphi(x)}}=e$ | $1^\infty$ 型 | 括号中 $1$ 后的无穷小与指数互为倒数 |
