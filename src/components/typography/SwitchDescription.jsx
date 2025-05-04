import { Typography } from "@mui/material";
import { styles } from "@styles/components/typography/SwitchDescription.js";

/**
 * `SwitchDescription` là một component hiển thị mô tả ngắn gọn bằng MUI `Typography`.
 * 
 * Component này hỗ trợ hiển thị nội dung mô tả với kiểu `body2` và tự động điều chỉnh style 
 * theo chế độ sáng/tối (dark mode).
 * 
 * @component
 * @param {Object} props - Các props được truyền vào component.
 * @param {string} props.desc - Nội dung mô tả sẽ được hiển thị.
 * @param {boolean} props.darkMode - Xác định chế độ hiện tại là dark mode hay không; dùng để thay đổi style tương ứng.
 * 
 * @returns {JSX.Element} Một phần tử `Typography` chứa nội dung mô tả được style phù hợp.
 */
export const SwitchDescription = ({ desc, darkMode }) => {
    return (
        <Typography
            variant="body2"
            sx={styles(darkMode).description}
        >
            {desc}
        </Typography>
    );
};
