import { authClient } from '~/utils/auth-client'
import { ROLES } from '../utils/role'

export default defineNuxtRouteMiddleware(async (to) => {
	// Chỉ kiểm tra phân quyền nếu truy cập vào các thư mục/trang bắt đầu bằng /admin
	if (to.path.startsWith('/admin')) {
		const { data: session } = await authClient.useSession(useFetch);

		// Nếu chưa đăng nhập hoặc không có quyền Admin, đẩy về trang chủ
		if (!session.value || session.value.user?.role !== ROLES.ADMIN) {
			return navigateTo('/');
		}
	}
});
