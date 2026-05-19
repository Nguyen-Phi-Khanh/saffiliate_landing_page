import { authClient } from '~/utils/auth-client'

export default defineNuxtRouteMiddleware(async (to) => {
	const { data: session } = await authClient.useSession(useFetch);

	// Danh sách các route phục vụ đăng nhập
	const authRoutes = ['/dang-nhap', '/login'];
	const isAuthRoute = authRoutes.includes(to.path);

	// 1. Nếu đã đăng nhập mà cố gắng truy cập trang đăng nhập -> đưa về trang chủ '/'
	if (session.value && isAuthRoute) {
		return navigateTo('/');
	}

	// 2. Nếu chưa đăng nhập mà truy cập các trang khác -> đưa về trang đăng nhập kèm trang redirect
	if (!session.value && !isAuthRoute) {
		return navigateTo({
			path: '/dang-nhap',
			query: { redirect: to.fullPath },
		});
	}
});
