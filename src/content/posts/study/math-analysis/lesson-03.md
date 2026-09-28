---
title: 第三课
date: 2026-09-28
category: study
series: math-analysis
order: 3
summary: 函数的极限 · 自变量趋于无穷大 · 自变量趋于有限值 · 单侧极限 · 极限的性质
---

## 二、函数的极限

数列（整标函数）的自变量 $n$ 是离散变化的。数列的极限研究的是自变量 $n$ 沿着正整数点向无穷大变化时，因变量 $y_n$ 是否任意地接近某一常数 $A$。下面我们来讨论自变量 $x$ 连续变化时，函数 $f(x)$ 有极限的情况。$x$ 的变化趋势包括 $x$ 趋于无穷大和 $x$ 趋于有限值。

### 1．自变量趋于无穷大时函数的极限

自变量 $x$ 趋于无穷大包括三种情况：$x\to+\infty$ 是指 $x$ 沿 $x$ 轴正向趋于无穷大，$x\to-\infty$ 是指 $x$ 沿 $x$ 轴负向趋于无穷大，$x\to\infty$ 是指 $x$ 沿 $x$ 轴正向和负向都趋于无穷大，即 $|x|$ 趋于无穷大。$x\to+\infty$ 与 $n\to\infty$ 的不同之处是 $n$ 是离散变化的，而 $x$ 是在某区间 $(a,+\infty)$ 内连续变化的。但 $x\to+\infty$ 时，函数 $f(x)$ 的极限定义与数列极限的定义是类似的。

**定义 1**（$x\to+\infty$ 时函数的极限）　设函数 $f(x)$ 在区间 $[a,+\infty)$ 上有定义，$A$ 是一常数，如果对任意给定的正数 $\varepsilon$，都存在正数 $N$，使得当 $x>N$ 时，恒有 $|f(x)-A|<\varepsilon$ 成立，则 $A$ 叫作函数 $f(x)$ 当 $x\to+\infty$ 时的极限，记作

$$\lim_{x\to+\infty} f(x)=A \quad \text{或} \quad f(x)\to A\;(x\to+\infty).$$

例如，$\displaystyle\lim_{x\to+\infty}\frac{1}{x}=0$，$\displaystyle\lim_{x\to+\infty}\arctan x=\frac{\pi}{2}$。

> 注：我们可将此定义中的"当 $x>N$ 时"说成"当 $x$ 充分大时"。

从几何上看，$\displaystyle\lim_{x\to+\infty}f(x)=A$ 意味着对 $\forall\varepsilon>0$，$\exists N>0$，使得 $f(x)$ 在 $N$ 右边的图形都位于直线 $y=A-\varepsilon$ 与 $y=A+\varepsilon$ 之间。

**定义 2**（$x\to-\infty$ 时函数的极限）　设函数 $f(x)$ 在区间 $(-\infty,b]$ 上有定义，$A$ 是一常数，如果对任意给定的正数 $\varepsilon$，都存在正数 $N$，使得当 $x<-N$ 时，恒有 $|f(x)-A|<\varepsilon$ 成立，则 $A$ 叫作函数 $f(x)$ 当 $x\to-\infty$ 时的极限，记作

$$\lim_{x\to-\infty} f(x)=A \quad \text{或} \quad f(x)\to A\;(x\to-\infty).$$

例如，$\displaystyle\lim_{x\to-\infty}\frac{1}{x}=0$，$\displaystyle\lim_{x\to-\infty}\arctan x=-\frac{\pi}{2}$，$\displaystyle\lim_{x\to-\infty}2^x=0$。

从几何上看，$\displaystyle\lim_{x\to-\infty}f(x)=A$ 意味着对 $\forall\varepsilon>0$，$\exists N>0$，使得 $f(x)$ 在 $-N$ 左边的图形都位于直线 $y=A-\varepsilon$ 与 $y=A+\varepsilon$ 之间。

**定义 3**（$x\to\infty$ 时函数的极限）　设函数 $f(x)$ 在区间 $(-\infty,b]\cup[a,+\infty)$ 上有定义，$A$ 是一常数，如果对任意给定的正数 $\varepsilon$，都存在正数 $N$，使得当 $|x|>N$ 时，恒有 $|f(x)-A|<\varepsilon$ 成立，则 $A$ 叫作函数 $f(x)$ 当 $x\to\infty$ 时的极限，记作

$$\lim_{x\to\infty} f(x)=A \quad \text{或} \quad f(x)\to A\;(x\to\infty).$$

例如，$\displaystyle\lim_{x\to\infty}\frac{1}{x}=0$，$\displaystyle\lim_{x\to\infty}|\arctan x|=\frac{\pi}{2}$。

> 注：我们可将此定义中的"当 $|x|>N$ 时"说成"当 $|x|$ 充分大时"。

从几何上看，$\displaystyle\lim_{x\to\infty}f(x)=A$ 意味着对 $\forall\varepsilon>0$，$\exists N>0$，使得 $f(x)$ 在 $-N$ 左边以及 $N$ 右边的图形都位于直线 $y=A-\varepsilon$ 与 $y=A+\varepsilon$ 之间。

三种情形的差别只在"$x$ 在哪一边趋于无穷"，对照如下。

| 情形 | 函数在何处有定义 | 定义中的条件 | 记法 |
| --- | --- | --- | --- |
| $x\to+\infty$ | $[a,+\infty)$ | $x>N$ | $\lim\limits_{x\to+\infty}f(x)=A$ |
| $x\to-\infty$ | $(-\infty,b]$ | $x<-N$ | $\lim\limits_{x\to-\infty}f(x)=A$ |
| $x\to\infty$ | $(-\infty,b]\cup[a,+\infty)$ | $\lvert x\rvert>N$ | $\lim\limits_{x\to\infty}f(x)=A$ |

**例 1**　证明 $\displaystyle\lim_{x\to\infty}\frac{\sin x}{x}=0$。

**证**　对 $\forall\varepsilon>0$，只要 $N=\dfrac{1}{\varepsilon}$，则当 $|x|>N$ 时，总有

$$|f(x)-0|=\left|\frac{\sin x}{x}-0\right|=\frac{|\sin x|}{|x|}\leq\frac{1}{|x|}<\varepsilon,$$

故 $\displaystyle\lim_{x\to\infty}\frac{\sin x}{x}=0$。

这个例子还带出一个名词：如果 $\displaystyle\lim_{x\to\infty}f(x)=c$，则直线 $y=c$ 是函数 $y=f(x)$ 的图形的**水平渐近线**。

三种自变量趋于无穷大时的极限有如下关系。

**定理 1**　$\displaystyle\lim_{x\to\infty}f(x)=A$ 的充分必要条件是 $\displaystyle\lim_{x\to+\infty}f(x)=A$ 且 $\displaystyle\lim_{x\to-\infty}f(x)=A$。

**证**　先证必要性。设 $\displaystyle\lim_{x\to\infty}f(x)=A$，则对 $\forall\varepsilon>0$，$\exists N>0$，当 $|x|>N$ 时，有 $|f(x)-A|<\varepsilon$。由此可得当 $x>N$，以及 $x<-N$ 时，都有 $|f(x)-A|<\varepsilon$，故有 $\displaystyle\lim_{x\to+\infty}f(x)=A$，$\displaystyle\lim_{x\to-\infty}f(x)=A$。

再证充分性。对 $\forall\varepsilon>0$，由于 $\displaystyle\lim_{x\to+\infty}f(x)=A$，$\exists N_1>0$，当 $x>N_1$ 时，有 $|f(x)-A|<\varepsilon$。由于 $\displaystyle\lim_{x\to-\infty}f(x)=A$，$\exists N_2>0$，当 $x<-N_2$ 时，有 $|f(x)-A|<\varepsilon$。令 $N=\max\{N_1,N_2\}$（此式表示取 $N_1,N_2$ 中最大的），则当 $|x|>N$ 时，有 $|f(x)-A|<\varepsilon$，故有 $\displaystyle\lim_{x\to\infty}f(x)=A$。

由于 $\displaystyle\lim_{x\to+\infty}\arctan x=\frac{\pi}{2}$，$\displaystyle\lim_{x\to-\infty}\arctan x=-\frac{\pi}{2}$，由定理 1 可知极限 $\displaystyle\lim_{x\to\infty}\arctan x$ 不存在。

### 2．自变量趋于有限值时函数的极限

自变量趋于有限值包括三种情况：$x\to x_0^+$，$x\to x_0^-$，$x\to x_0$。其中 $x\to x_0^+$ 表示在数轴上 $x$ 从 $x_0$ 的右侧无限接近于 $x_0$ 但又不等于 $x_0$；$x\to x_0^-$ 表示在数轴上 $x$ 从 $x_0$ 的左侧无限接近于 $x_0$ 但又不等于 $x_0$；$x\to x_0$ 表示在数轴上 $x$ 从 $x_0$ 的两侧无限接近于 $x_0$ 但又不等于 $x_0$。

直观上，如果当 $x\to x_0$ 时，函数 $f(x)$ 任意地接近于常数 $A$，则称 $A$ 是函数 $f(x)$ 当 $x\to x_0$ 时的极限，记作 $\displaystyle\lim_{x\to x_0}f(x)=A$。

例如，$\displaystyle\lim_{x\to1}\frac{x^2}{2}=\frac{1}{2}$。考察 $f(x)=\dfrac{x^2}{2}$ 的图形，当 $x$ 充分接近 1 且不等于 1 时，$\dfrac{x^2}{2}$ 可以任意地接近于 $\dfrac{1}{2}$，即对 $\forall\varepsilon>0$，都存在 $\delta>0$，使对 $x_0=1$ 的去心 $\delta$ 邻域内的所有 $x$，即当 $0<|x-1|<\delta$ 时，$f(x)$ 的图形都位于直线 $y=\dfrac{1}{2}-\varepsilon$ 与 $y=\dfrac{1}{2}+\varepsilon$ 之间。

一般地，有如下严格定义（称为 $\varepsilon-\delta$ 定义）。这里 $\delta$ 是希腊字母，读作 delta。

**定义 4**（$x\to x_0$ 时函数的极限）　设函数 $f(x)$ 在点 $x_0$ 的某去心邻域内有定义，$A$ 是一常数，如果对任意给定的正数 $\varepsilon$，都存在正数 $\delta$，使得当 $x$ 满足不等式 $0<|x-x_0|<\delta$ 时，总有 $|f(x)-A|<\varepsilon$，则 $A$ 叫作函数 $f(x)$ 当 $x\to x_0$ 时的极限（或 $f(x)$ 在点 $x_0$ 的极限），记作

$$\lim_{x\to x_0} f(x)=A \quad \text{或} \quad f(x)\to A\;(x\to x_0).$$

由于 $\displaystyle\lim_{x\to x_0}f(x)$ 研究的是当 $x$ 无限接近于 $x_0$ 时 $f(x)$ 的变化趋势，因此当 $x\to x_0$ 时，$f(x)$ 的极限是否存在同 $f(x_0)$ 没有关系，$f(x)$ 可以在 $x_0$ 处没有定义，也允许 $f(x_0)$ 存在，但 $f(x_0)$ 与 $A$ 不相等，因此在定义中有 $0<|x-x_0|<\delta$。

定义中的"当 $0<|x-x_0|<\delta$ 时"可以说成"当 $x$ 充分接近 $x_0$ 时"。

几何上，$\displaystyle\lim_{x\to x_0}f(x)=A$ 意味着对 $\forall\varepsilon>0$，都 $\exists\delta>0$，使得当 $x$ 在 $x_0$ 的去心 $\delta$ 邻域内时，函数 $f(x)$ 的图形都位于直线 $y=A-\varepsilon$ 与 $y=A+\varepsilon$ 之间。换个说法：当 $x$ 在 $x_0$ 的去心 $\delta$ 邻域时，函数 $y=f(x)$ 的图形完全落在以直线 $y=A$ 为中心线、宽为 $2\varepsilon$ 的带形区域内。

定义里的几个符号各管一段，不要混：

| 符号 | 含义 | 在定义里的角色 |
| --- | --- | --- |
| $\varepsilon$ | 任给的正数，代表允许的误差 | 由外部给定，要多么小就多么小 |
| $\delta$ | 与 $\varepsilon$ 有关的正数 | 去心邻域的半径：$\varepsilon$ 定了，$\delta$ 才定得下来 |
| $x_0$ | 考察点 | $f$ 在它的某去心邻域内有定义，但 $x_0$ 本身可以不参与 |
| $x$ | 自变量 | 讨论的是满足 $0<\lvert x-x_0\rvert<\delta$ 的那些点 |

**例 2**　证明 $\displaystyle\lim_{x\to x_0}C=C$（$C$ 为常数）。

**证**　$\lvert f(x)-A\rvert=\lvert C-C\rvert=0<\varepsilon$ 恒成立，故任给 $\varepsilon>0$，任取 $\delta>0$，当 $0<\lvert x-x_0\rvert<\delta$ 时都有 $\lvert f(x)-A\rvert<\varepsilon$，因此 $\displaystyle\lim_{x\to x_0}C=C$。

**例 3**　证明 $\displaystyle\lim_{x\to x_0}x=x_0$。

**证**　$\because\lvert f(x)-A\rvert=\lvert x-x_0\rvert$，任给 $\varepsilon>0$，取 $\delta=\varepsilon$，则当 $0<\lvert x-x_0\rvert<\delta=\varepsilon$ 时，$\lvert f(x)-A\rvert=\lvert x-x_0\rvert<\varepsilon$ 成立，故 $\displaystyle\lim_{x\to x_0}x=x_0$。

**例 4**　证明 $\displaystyle\lim_{x\to1}\frac{x^2-1}{x-1}=2$。

**证**　$\because\left\lvert f(x)-A\right\rvert=\left\lvert\frac{x^2-1}{x-1}-2\right\rvert=\lvert x-1\rvert$。任给 $\varepsilon>0$，只要取 $\delta=\varepsilon$，则当 $0<\lvert x-1\rvert<\delta$ 时，要使 $\lvert f(x)-A\rvert<\varepsilon$，就有

$$\left\lvert\frac{x^2-1}{x-1}-2\right\rvert<\varepsilon,$$

故 $\displaystyle\lim_{x\to1}\frac{x^2-1}{x-1}=2$。

这个例子里函数在点 $x=1$ 处根本没有定义，极限照样存在 —— 这正是定义 4 里那个 $0<\lvert x-x_0\rvert$ 的作用。

**例 5**　证明 $\displaystyle\lim_{x\to2}\frac{2x^2-3x-2}{x-2}=5$。

**证**　对 $\forall\varepsilon>0$，只要 $\delta=\dfrac{\varepsilon}{2}$，则当 $0<|x-2|<\delta$ 时，总有

$$|f(x)-5|=\left|\frac{2x^2-3x-2}{x-2}-5\right|=\left|\frac{(2x+1)(x-2)}{x-2}-5\right|=|(2x+1)-5|=2|x-2|<\varepsilon,$$

（最后一步用到 $2\lvert x-2\rvert<2\delta=\varepsilon$。）故 $\displaystyle\lim_{x\to2}\frac{2x^2-3x-2}{x-2}=5$。

**例 6**　证明 $\displaystyle\lim_{x\to x_0}\sqrt x=\sqrt{x_0}$。

**证**　$\because$

$$\lvert f(x)-A\rvert=\lvert\sqrt x-\sqrt{x_0}\rvert=\frac{\lvert x-x_0\rvert}{\sqrt x+\sqrt{x_0}}\le\frac{\lvert x-x_0\rvert}{\sqrt{x_0}},$$

任给 $\varepsilon>0$，取 $\delta=\min\{x_0,\ \sqrt{x_0}\,\varepsilon\}$，则当 $0<\lvert x-x_0\rvert<\delta$ 时，要使 $\lvert f(x)-A\rvert<\varepsilon$，就有 $\lvert\sqrt x-\sqrt{x_0}\rvert<\varepsilon$，故 $\displaystyle\lim_{x\to x_0}\sqrt x=\sqrt{x_0}$。

这里的 $\delta$ 取了两个数中较小的那个，两头各有一个约束：

- 一头是**函数要有定义**。$\sqrt x$ 只在 $x\ge0$ 上有意义，所以去心邻域 $(x_0-\delta,x_0+\delta)$ 必须整个落在定义域里，也就是 $x_0-\delta>0$，即 $\delta\le x_0$（此处 $x_0>0$）。
- 另一头是**误差要小于 $\varepsilon$**。由上面那个不等式，只要 $\lvert x-x_0\rvert<\sqrt{x_0}\,\varepsilon$，就能推出 $\lvert\sqrt x-\sqrt{x_0}\rvert<\varepsilon$，即 $\delta\le\sqrt{x_0}\,\varepsilon$。

两个上界必须同时成立，而 $\delta$ 越小条件越容易满足，所以取二者中较小的：$\delta=\min\{x_0,\sqrt{x_0}\,\varepsilon\}$。$\delta$ 不能是 $0$，$x_0>0$、$\varepsilon>0$ 保证这个最小值是正的。**记住这个套路**：把 $\lvert f(x)-A\rvert$ 放大成一个含 $\lvert x-x_0\rvert$ 的式子，再让放大后的式子 $<\varepsilon$，反解出 $\delta$ 应该取多大。

**例 7**　证明 $\displaystyle\lim_{x\to0}e^x=1$。

**证**　$\forall\varepsilon>0$，不妨设 $\varepsilon<1$，要使 $\lvert e^x-1\rvert<\varepsilon$，

只要 $1-\varepsilon<e^x<1+\varepsilon$，只要 $\ln(1-\varepsilon)<x<\ln(1+\varepsilon)$。

取 $\delta=\min\{\lvert\ln(1-\varepsilon)\rvert,\ \lvert\ln(1+\varepsilon)\rvert\}$，则当 $0<\lvert x-0\rvert<\delta$ 时，有 $\lvert e^x-1\rvert<\varepsilon$。根据函数极限的定义，有

$$\lim_{x\to0}e^x=1.$$

这里同样取了二者中小的那个，理由和例 6 是一回事，只是两头换了：要 $x$ 同时大于 $\ln(1-\varepsilon)$、小于 $\ln(1+\varepsilon)$。因为 $0<\varepsilon<1$，所以 $\ln(1-\varepsilon)<0<\ln(1+\varepsilon)$ —— 左端点是个负数，右端点是个正数。$\lvert x\rvert<\delta$ 意味着 $x$ 落在 $(-\delta,\delta)$ 里，要让它同时不越过左、右两个端点，就要求 $\delta$ 不超过"原点到左端点的距离"与"原点到右端点的距离"：前者是 $-\ln(1-\varepsilon)=\lvert\ln(1-\varepsilon)\rvert$，后者是 $\ln(1+\varepsilon)=\lvert\ln(1+\varepsilon)\rvert$。取小的那个，$x$ 就两头都到不了。

**关于"为什么要取 $\varepsilon$"**：$\varepsilon$ 是别人给的那个误差门槛，它不能由 $\delta$ 推出来，只能由它去**定** $\delta$。所以用定义证极限，动作永远是同一个套路 —— 先写出 $\lvert f(x)-A\rvert$，再解不等式 $\lvert f(x)-A\rvert<\varepsilon$，把解出来的 $\lvert x-x_0\rvert$ 的上界取作 $\delta$。例 3 里 $\delta=\varepsilon$，例 5 里 $\delta=\dfrac{\varepsilon}{2}$，例 6 里 $\delta=\sqrt{x_0}\,\varepsilon$ 与 $x_0$ 取小，例 7 里两个对数与 $\varepsilon$ 一起进 $\min$：$\delta$ 是 $\varepsilon$ 的函数，$\varepsilon$ 变小，$\delta$ 一般也跟着变小。

接下来研究函数在点 $x_0$ 的单侧极限。

**定义 5**（左极限）　设函数 $f(x)$ 在点 $x_0$ 的某左邻域内有定义，$A$ 是一常数，如果对任意给定的正数 $\varepsilon$，都存在正数 $\delta$，使得当 $x$ 满足不等式 $0<x_0-x<\delta$ 时，总有 $|f(x)-A|<\varepsilon$，则 $A$ 叫作函数 $f(x)$ 在点 $x_0$ 的左极限，记作

$$\lim_{x\to x_0^-}f(x)=A \quad \text{或} \quad f(x)\to A\;(x\to x_0^-) \quad \text{或} \quad f(x_0-0)=A.$$

**定义 6**（右极限）　设函数 $f(x)$ 在点 $x_0$ 的某右邻域内有定义，$A$ 是一常数，如果对任意给定的正数 $\varepsilon$，都存在正数 $\delta$，使得当 $x$ 满足不等式 $0<x-x_0<\delta$ 时，总有 $|f(x)-A|<\varepsilon$，则 $A$ 叫作函数 $f(x)$ 在点 $x_0$ 的右极限，记作

$$\lim_{x\to x_0^+}f(x)=A \quad \text{或} \quad f(x)\to A\;(x\to x_0^+) \quad \text{或} \quad f(x_0+0)=A.$$

左极限与右极限统称为单侧极限。两者的差别只在 $x$ 从哪一边靠近 $x_0$：

| 单侧极限 | 定义中的不等式 | 记法 |
| --- | --- | --- |
| 左极限 | $0<x_0-x<\delta$（即 $x_0-\delta<x<x_0$） | $f(x_0-0)=\lim\limits_{x\to x_0^-}f(x)$ |
| 右极限 | $0<x-x_0<\delta$（即 $x_0<x<x_0+\delta$） | $f(x_0+0)=\lim\limits_{x\to x_0^+}f(x)$ |

**例 8**　验证 $\displaystyle\lim_{x\to0}\frac{\lvert x\rvert}{x}$ 不存在。

**证**　当 $x<0$ 时 $\lvert x\rvert=-x$，当 $x>0$ 时 $\lvert x\rvert=x$，于是

$$\lim_{x\to0^-}\frac{\lvert x\rvert}{x}=\lim_{x\to0^-}\frac{-x}{x}=\lim_{x\to0^-}(-1)=-1,\qquad \lim_{x\to0^+}\frac{\lvert x\rvert}{x}=\lim_{x\to0^+}\frac{x}{x}=\lim_{x\to0^+}1=1,$$

$\because-1\ne1$，$\therefore\displaystyle\lim_{x\to0}\frac{\lvert x\rvert}{x}$ 不存在。

**例 9**　证明 $\displaystyle\lim_{x\to0^+}e^x=1$。

**证**　由于当 $x>0$ 时，$|e^x-1|=e^x-1$，由 $e^x-1<\varepsilon$，可得 $e^x<1+\varepsilon$，$x<\ln(1+\varepsilon)$，因此，对 $\forall\varepsilon>0$，只要 $\delta=\ln(1+\varepsilon)$，则当 $0<x<\delta$ 时，总有

$$|e^x-1|=e^x-1<\varepsilon,$$

故 $\displaystyle\lim_{x\to0^+}e^x=1$。

例 7 证的是双侧的 $\displaystyle\lim_{x\to0}e^x=1$，需要 $\delta$ 同时照看 $\ln(1-\varepsilon)$ 与 $\ln(1+\varepsilon)$ 两头；这里的 $x$ 只从右边来，只剩 $\ln(1+\varepsilon)$ 一头，$\delta$ 就退成一个数 $\ln(1+\varepsilon)$ 了。同一个函数，过程不同，$\delta$ 的写法跟着变。

函数在一点处的极限与它在该点处的左极限和右极限有如下关系。

**定理 2**　$\displaystyle\lim_{x\to x_0}f(x)=A$ 的充分必要条件是 $\displaystyle\lim_{x\to x_0^-}f(x)=A$ 且 $\displaystyle\lim_{x\to x_0^+}f(x)=A$。（证明与定理 1 的证明类似。）

根据定理 2，如果 $f(x_0-0)$ 与 $f(x_0+0)$ 有一个不存在，或者两者都存在但不相等，则 $\displaystyle\lim_{x\to x_0}f(x)$ 一定不存在。

例如，$f(x)=\begin{cases}x, & x>0,\\[2pt]\dfrac{1}{x}, & x<0,\end{cases}$ 由于 $\displaystyle\lim_{x\to0^-}f(x)=\lim_{x\to0^-}\frac{1}{x}$ 不存在，故 $\displaystyle\lim_{x\to0}f(x)$ 不存在。

又如，$g(x)=\operatorname{sgn}x=\begin{cases}1, & x>0,\\0, & x=0,\\-1, & x<0,\end{cases}$ 由于 $\displaystyle\lim_{x\to0^-}g(x)=\lim_{x\to0^-}(-1)=-1$，$\displaystyle\lim_{x\to0^+}g(x)=\lim_{x\to0^+}1=1$，可知 $\displaystyle\lim_{x\to0}g(x)$ 不存在。

## 第三节　极限的性质

前一节我们给出了极限的定义，在这一节我们将讨论极限的基本性质。

### 1．极限的唯一性

**定理 3**　如果极限存在，则必唯一。

**证**　下面只对数列证明此性质，其他情形证明类似。设数列 $\{y_n\}$ 有极限，我们只需证明：如果 $\displaystyle\lim_{n\to\infty}y_n=A$，且 $\displaystyle\lim_{n\to\infty}y_n=B$，则一定有 $A=B$。

用反证法。如果 $A\neq B$，由于 $\displaystyle\lim_{n\to\infty}y_n=A$，根据数列极限的定义，对 $\varepsilon=\dfrac{|B-A|}{2}$，$\exists N_1>0$，使得当 $n>N_1$ 时，总有

$$|y_n-A|<\frac{|B-A|}{2}. \tag{1}$$

又由于 $\displaystyle\lim_{n\to\infty}y_n=B$，故 $\exists N_2>0$，使得当 $n>N_2$ 时，总有

$$|y_n-B|<\frac{|B-A|}{2}. \tag{2}$$

取 $N=\max\{N_1,N_2\}$，则当 $n>N$ 时，应该有式 (1)、式 (2) 都成立，但由式 (1) 成立却得到

$$|y_n-B|=|(y_n-A)+(A-B)|\geq|B-A|-|y_n-A|>|B-A|-\frac{|B-A|}{2}=\frac{|B-A|}{2},$$

产生矛盾，因此应该有 $A=B$。

### 2．有界性或局部有界性

**定理 4**

- 如果数列 $\{y_n\}$ 收敛，则 $\{y_n\}$ 一定有界，即 $\exists M>0$，使得对所有 $n$，都有 $|y_n|\leq M$；
- 如果 $\displaystyle\lim_{x\to x_0}f(x)$ 存在，则在点 $x_0$ 的某去心邻域内，函数 $f(x)$ 有界；
- 如果 $\displaystyle\lim_{x\to\infty}f(x)$ 存在，则当 $|x|$ 充分大时（即 $\exists N>0$，当 $|x|>N$ 时），函数 $f(x)$ 有界。

对 $x\to x_0^-$，$x\to x_0^+$，$x\to-\infty$，$x\to+\infty$ 有同样的结论，此处不再一一详细表述。

**证**　设 $\displaystyle\lim_{n\to\infty}y_n=A$，则对 $\varepsilon=1$，存在正整数 $N$，使得当 $n>N$ 时，总有 $|y_n-A|<1$，

故 $|y_n|=|(y_n-A)+A|\leq|y_n-A|+|A|<1+|A|$，

令 $M=\max\{|y_1|,|y_2|,\cdots,|y_N|,1+|A|\}$，则对所有 $n$，都有 $|y_n|\leq M$，即 $\{y_n\}$ 有界。

设 $\displaystyle\lim_{x\to x_0}f(x)=A$，则对 $\varepsilon=1$，$\exists\delta>0$，使得当 $0<|x-x_0|<\delta$ 时，总有 $|f(x)-A|<1$，于是有

$$|f(x)|=|(f(x)-A)+A|\leq|f(x)-A|+|A|<1+|A|,$$

即 $f(x)$ 在点 $x_0$ 的某去心邻域内有界。其他情况留给读者自己证明。

### 3．局部保号性

**定理 5**

- 如果 $\displaystyle\lim_{x\to x_0}f(x)=A$，且 $A>0$（或 $A<0$），则在点 $x_0$ 的某去心邻域内，有 $f(x)>0$（或 $f(x)<0$）；
- 如果 $\displaystyle\lim_{x\to\infty}f(x)=A$，且 $A>0$（或 $A<0$），则当 $|x|$ 充分大时（即 $\exists N>0$，当 $|x|>N$ 时），有 $f(x)>0$（或 $f(x)<0$）。

对 $x\to x_0^-$，$x\to x_0^+$，$x\to-\infty$，$x\to+\infty$ 的情形以及数列极限有同样的结论。

**证**　设 $\displaystyle\lim_{x\to x_0}f(x)=A$，且 $A>0$，则对 $\varepsilon=\dfrac{A}{2}$，$\exists\delta>0$，使得当 $0<|x-x_0|<\delta$ 时，总有 $|f(x)-A|<\dfrac{A}{2}$，即

$$-\frac{A}{2}<f(x)-A<\frac{A}{2},$$

故有 $f(x)>A-\dfrac{A}{2}=\dfrac{A}{2}>0$。其他情形证明略。

证明的关键就是取 $\varepsilon=\dfrac{A}{2}$：把误差卡在极限值的一半之内，函数值就再也不可能掉到 $0$ 以下去。课件里还多写了一条同源的结论：若 $\displaystyle\lim_{x\to x_0}f(x)=A\ne0$，则存在点 $x_0$ 的一个去心邻域，在该邻域内有 $|f(x)|>\dfrac{|A|}{2}$。

**这个结论反过来不成立。** 由"在点 $x_0$ 的某去心邻域内 $f(x)>0$"推不出"$A>0$"，只能推出 $A\geq0$（这正是下面保序性的内容）。反例：取 $f(x)=x^2$，$x_0=0$。当 $x\ne0$ 时恒有 $f(x)=x^2>0$，可是

$$\lim_{x\to0}x^2=0,$$

极限是 $0$，并不是一个正数。函数值处处为正，极限却可以取到 $0$ —— 保号性只管"由 $A$ 的符号推 $f$ 的符号"这一个方向，反方向要退成不严格的不等号。

### 4．保序性（比较性质）

**定理 6**

- 如果在点 $x_0$ 的某去心邻域内有 $f(x)\geq0$，且 $\displaystyle\lim_{x\to x_0}f(x)=A$，则 $A\geq0$；
- 如果当 $|x|$ 充分大时（即 $\exists N>0$，当 $|x|>N$ 时），有 $f(x)\geq0$，且 $\displaystyle\lim_{x\to\infty}f(x)=A$，则 $A\geq0$。

对 $x\to x_0^-$，$x\to x_0^+$，$x\to-\infty$，$x\to+\infty$ 的情形以及数列极限有同样的结论。如果将定理中的条件 $f(x)\geq0$ 改为 $f(x)\leq0$，则定理的结论应为 $A\leq0$。

**证**（反证法，取 $\varepsilon=\dfrac{A}{2}$ 的同一手法）　设 $A<0$。对 $\varepsilon=\dfrac{|A|}{2}=-\dfrac{A}{2}>0$，$\exists\delta>0$，使得当 $0<|x-x_0|<\delta$ 时，总有 $|f(x)-A|<\dfrac{|A|}{2}$，即

$$\frac{3A}{2}<f(x)<\frac{A}{2}<0,$$

这与"在该去心邻域内 $f(x)\geq0$"矛盾，故 $A\geq0$。

也可以用定理 5 来证：设 $A<0$，由局部保号性，存在 $x_0$ 的一个去心邻域使 $f(x)<0$；而题目已给一个去心邻域使 $f(x)\geq0$，两个去心邻域取交（即把半径取成两者中较小的那个）后仍是一个去心邻域，在其中既要 $f(x)<0$ 又要 $f(x)\geq0$，矛盾。

**推论**

- 如果在点 $x_0$ 的某去心邻域内有 $f(x)\geq g(x)$，且 $\displaystyle\lim_{x\to x_0}f(x)=A$，$\displaystyle\lim_{x\to x_0}g(x)=B$，则 $A\geq B$；
- 如果当 $|x|$ 充分大时（即 $\exists N>0$，当 $|x|>N$ 时），有 $f(x)\geq g(x)$，且 $\displaystyle\lim_{x\to\infty}f(x)=A$，$\displaystyle\lim_{x\to\infty}g(x)=B$，则 $A\geq B$。

对自变量的其他情况有类似的结论。

**证**（反证法）　只证第一种情形。设 $A<B$，取 $\varepsilon=\dfrac{B-A}{2}>0$。

由 $\displaystyle\lim_{x\to x_0}f(x)=A$，$\exists\delta_1>0$，当 $0<|x-x_0|<\delta_1$ 时，有 $|f(x)-A|<\varepsilon$，即

$$f(x)<A+\varepsilon=\frac{A+B}{2};$$

由 $\displaystyle\lim_{x\to x_0}g(x)=B$，$\exists\delta_2>0$，当 $0<|x-x_0|<\delta_2$ 时，有 $|g(x)-B|<\varepsilon$，即

$$g(x)>B-\varepsilon=\frac{A+B}{2}.$$

取 $\delta=\min\{\delta_1,\delta_2\}$，则当 $0<|x-x_0|<\delta$ 时，两式同时成立，于是 $g(x)>\dfrac{A+B}{2}>f(x)$，与已知的 $f(x)\geq g(x)$ 矛盾，故 $A\geq B$。

这一段的证明只用到 $\varepsilon-\delta$ 定义本身，没有借用极限的四则运算 —— 保序性是"不等式能不能过极限这道关"的最基本结论。

### 5．归并性（函数极限与数列极限的关系）

**定理 7**

（1）$\displaystyle\lim_{x\to a}f(x)=A$（或 $\infty$）的充分必要条件是，对任意数列 $\{x_n\}$（$x_n\neq a$，且 $x_n$ 在 $f(x)$ 的定义域内），只要 $\displaystyle\lim_{n\to\infty}x_n=a$，则有 $\displaystyle\lim_{n\to\infty}f(x_n)=A$（或 $\infty$）。

（2）$\displaystyle\lim_{x\to+\infty}f(x)=A$（或 $\infty$）的充分必要条件是，对任意数列 $\{x_n\}$，只要 $\displaystyle\lim_{n\to\infty}x_n=+\infty$，则有 $\displaystyle\lim_{n\to\infty}f(x_n)=A$（或 $\infty$）。对 $\displaystyle\lim_{x\to-\infty}f(x)$ 及 $\displaystyle\lim_{x\to\infty}f(x)$ 有类似结论。

**证**　(1) 只对 $\displaystyle\lim_{x\to a}f(x)=A$ 的情况证明。

**必要性。** 设 $\displaystyle\lim_{x\to a}f(x)=A$，则对 $\forall\varepsilon>0$，$\exists\delta>0$，当 $0<|x-a|<\delta$ 时，有 $|f(x)-A|<\varepsilon$。由于 $\displaystyle\lim_{n\to\infty}x_n=a$，$x_n\neq a$，故对 $\delta>0$，$\exists N>0$，当 $n>N$ 时，有 $0<|x_n-a|<\delta$，因此有 $|f(x_n)-A|<\varepsilon$，所以

$$\lim_{n\to\infty}f(x_n)=A.$$

**充分性。** 反证。在定理的条件下，若 $\displaystyle\lim_{x\to a}f(x)\neq A$，则对某个 $\varepsilon_0>0$，找不到极限定义中要求的 $\delta$。即对任意自然数 $n$，都存在 $x$ 满足 $0<|x-a|<\dfrac{1}{n}$，但 $|f(x)-A|\geq\varepsilon_0$。取这样的点构造一个数列 $\{x_n\}$，$n=1,2,\cdots$，满足 $0<|x_n-a|<\dfrac{1}{n}$，且 $|f(x_n)-A|\geq\varepsilon_0$。由于 $0<|x_n-a|<\dfrac{1}{n}$，所以 $\displaystyle\lim_{n\to\infty}x_n=a$，但不论 $n$ 多大，都不能使 $|f(x_n)-A|<\varepsilon_0$，与 $\displaystyle\lim_{n\to\infty}f(x_n)=A$ 矛盾。故应有 $\displaystyle\lim_{x\to a}f(x)=A$。

$\displaystyle\lim_{x\to a}f(x)=\infty$ 的证明类似。(2) 的证明与 (1) 的证明类似。

根据定理 7，可以利用函数的极限去求某些数列的极限，也可以通过某些数列不存在极限而得出函数的极限不存在。这条定理通常也叫**海涅定理**，或叫**归结原则**：函数极限存在问题被归结成了数列极限的问题。

**板书：怎样构造出收敛于 $a$ 的数列**（老师课堂上补充的写法）

板书写了三行：

1. $\forall\varepsilon>0$；
2. $\exists$ 一列邻域 $U_1,U_2,\dots,U_n,\dots$；
3. 使得 $x_n\in U_n$。

三行的意思连起来就是一句话：**怎样造出一条趋于点 $a$ 的数列 $\{x_n\}$**。

第一步的 $\forall\varepsilon>0$ 是定理陈述里"任给误差"的那一半，它管的是最终要证的结论 $|f(x_n)-A|<\varepsilon$。第二步是造一列**嵌套**的去心邻域，取

$$U_n=\left(a-\frac1n,\ a+\frac1n\right)\setminus\{a\},\qquad n=1,2,3,\dots$$

$n$ 越大，$U_n$ 越小，这一列邻域一起向 $a$ 收缩逼近。第三步在每个 $U_n$ 里随便挑一个点 $x_n$：因为 $0<|x_n-a|<\dfrac1n$，所以 $x_n\to a$，并且 $x_n\ne a$ —— 挑出来的 $\{x_n\}$ 自动就是一条合法的数列，它正是"以任意方式接近 $a$"的一种最一般的写法。

**关于这里的 $\varepsilon$ 为什么这样取。** 定理 7 的充分性是反证法，假设 $\displaystyle\lim_{x\to a}f(x)\neq A$。把极限定义否定掉，得到的是：**存在一个固定的正数 $\varepsilon_0$**，使得不论正数 $\delta$ 取多么小，在 $x_0$ 的去心 $\delta$ 邻域里总能找到一个点 $x$，它满足 $|f(x)-A|\geq\varepsilon_0$。

于是出现了两个 $\varepsilon$，分工完全不同：

| 记号 | 身份 | 干什么用 |
| --- | --- | --- |
| $\varepsilon$ | 定理结论里**任给**的误差 | 要证"对每一个 $\varepsilon$ 都能做到 $|f(x_n)-A|<\varepsilon$"，所以由它去定 $\delta$ |
| $\varepsilon_0$ | 反证假设里**固定下来**的那一个 | 来自"极限不等于 $A$"的否定式，是专门用来挑刺的门槛，全程不变 |

而板书第二步里的 $\dfrac{1}{n}$，充当的正是"不论 $\delta$ 取多么小"里那个越来越小的 $\delta$：对 $n=1,2,3,\dots$ 依次取 $\delta=\dfrac1n$，就在每个 $U_n$ 里挑出一个坏点 $x_n$，它满足 $|f(x_n)-A|\geq\varepsilon_0$。这样造出的数列有 $x_n\to a$，可是 $f(x_n)$ 永远跨不过 $\varepsilon_0$ 这道坎，即 $\displaystyle\lim_{n\to\infty}f(x_n)\neq A$，与题设"任何这样的数列都给 $A$"矛盾。**取 $\varepsilon_0$ 之所以合法，是因为它来自一个"否定式"；取 $\dfrac1n$ 之所以可行，是因为 $\delta$ 可以被取得任意小。** 一句话概括这条定理的意思：只要 $x_n\to a$ 且 $x_n\ne a$，那么不管用什么方式靠近 $a$，算出来的 $f(x_n)$ 都得归于同一个 $A$。

**例 10**　证明下列极限不存在：

(1) $\displaystyle\lim_{x\to+\infty}\sin x$；(2) $\displaystyle\lim_{x\to+\infty}\tan x$。

**证**　(1) 令 $f(x)=\sin x$，如取 $x_n=n\pi$（$x_n$ 单调增加趋于正无穷大），则有 $\displaystyle\lim_{n\to\infty}f(x_n)=\lim_{n\to\infty}\sin n\pi=\lim_{n\to\infty}0=0$，

如取 $x_n=2n\pi+\dfrac{\pi}{2}$，则有 $\displaystyle\lim_{n\to\infty}f(x_n)=\lim_{n\to\infty}\sin\left(2n\pi+\frac{\pi}{2}\right)=\lim_{n\to\infty}1=1$，

因此 $\displaystyle\lim_{x\to+\infty}\sin x$ 不存在。

(2) 令 $f(x)=\tan x$，取 $x_n=n\pi+\dfrac{\pi}{2}$（$x_n$ 单调增加趋于正无穷大），$f(x_n)$ 没有意义，因此 $\displaystyle\lim_{x\to+\infty}\tan x$ 不存在。

同样可证明 $\displaystyle\lim_{x\to-\infty}\sin x$，$\displaystyle\lim_{x\to-\infty}\tan x$ 都不存在。对 $\cos x$，$\cot x$ 可以得到同样结果。

**例 11**　证明 $\displaystyle\lim_{x\to0}\sin\frac1x$ 不存在。

**证**　取 $\{x_n\}=\left\{\dfrac{1}{n\pi}\right\}$，$\displaystyle\lim_{n\to\infty}x_n=0$ 且 $x_n\ne0$；取 $\{x'_n\}=\left\{\dfrac{1}{\frac{4n+1}{2}\pi}\right\}$，$\displaystyle\lim_{n\to\infty}x'_n=0$ 且 $x'_n\ne0$。

而

$$\lim_{n\to\infty}\sin\frac{1}{x_n}=\lim_{n\to\infty}\sin n\pi=0,\qquad \lim_{n\to\infty}\sin\frac{1}{x'_n}=\lim_{n\to\infty}\sin\frac{4n+1}{2}\pi=\lim_{n\to\infty}1=1,$$

二者不相等，故 $\displaystyle\lim_{x\to0}\sin\frac1x$ 不存在。

例 10 与例 11 用的是同一条思路的另一头：**要证函数极限不存在，就造两条都趋于 $a$ 的数列，让 $f$ 在它们上面的极限不相等**（或有一条不收敛）；反过来，要证某个数列极限存在且等于 $A$，也可以把它看成某个已知函数极限取 $x_n\to a$ 的结果。

### 6．绝对值性质

**定理 8**　在自变量的某种趋向下，如果 $\lim f(x)=A$，则有 $\lim|f(x)|=|A|$。

"在自变量的某种趋向下"指的是以下七种情形之一：$n\to\infty$；$x\to\infty$，$x\to+\infty$，$x\to-\infty$；$x\to x_0$，$x\to x_0^+$，$x\to x_0^-$。

**证**　只对 $x\to a$ 的情况证明，其他情形证明类似。对 $\forall\varepsilon>0$，由于 $\displaystyle\lim_{x\to a}f(x)=A$，$\exists\delta>0$，当 $0<|x-a|<\delta$ 时，有 $|f(x)-A|<\varepsilon$，从而 $\left||f(x)|-|A|\right|\leq|f(x)-A|<\varepsilon$，所以

$$\lim_{x\to a}|f(x)|=|A|.$$

六条性质收在一起：

| 性质 | 定理 | 结论 |
| --- | --- | --- |
| 唯一性 | 定理 3 | 极限存在则唯一 |
| 局部有界性 | 定理 4 | 极限存在 ⟹ 在该去心邻域内（或 $\lvert x\rvert$ 充分大时）函数有界 |
| 局部保号性 | 定理 5 | $A>0$（或 $A<0$）⟹ 某去心邻域内 $f(x)>0$（或 $f(x)<0$） |
| 保序性 | 定理 6 | $f(x)\geq0$ ⟹ $A\geq0$；$f(x)\geq g(x)$ ⟹ $A\geq B$ |
| 归并性 | 定理 7 | 函数极限存在 ⟺ 任何 $x_n\to a$（$x_n\ne a$）都给出同一个 $f(x_n)$ 的极限 |
| 绝对值性质 | 定理 8 | $\lim f(x)=A$ ⟹ $\lim\lvert f(x)\rvert=\lvert A\rvert$ |

### 思考题

试问函数

$$f(x)=\begin{cases}x\sin\dfrac1x,&x>0\\ 10,&x=0\\ 5+x^2,&x<0\end{cases}$$

在 $x=0$ 处的左、右极限是否存在？当 $x\to0$ 时，$f(x)$ 的极限是否存在？

**解**　$\displaystyle\lim_{x\to0^-}(5+x^2)=5$，左极限存在，$\displaystyle\lim_{x\to0^-}f(x)=5$；$\displaystyle\lim_{x\to0^+}x\sin\frac1x=0$，右极限存在，$\displaystyle\lim_{x\to0^+}f(x)=0$。$\because\displaystyle\lim_{x\to0^-}f(x)\ne\lim_{x\to0^+}f(x)$，$\therefore\displaystyle\lim_{x\to0}f(x)$ 不存在。

（作业：习题 1-2（第 24 页）3(1)(4)，4；习题 1-3（第 28 页）1，4。）
